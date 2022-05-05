// @ts-nocheck - may need to be at the start of file
import {ReactEditor} from "slate-react";
import {EditableProps} from 'slate-react/dist/components/editable';
import {
    createComboboxPlugin,
    createImagePlugin,
    createMentionPlugin,
    createPlateUI,
    createPlugins,
    MentionElement,
    Plate
} from '@udecode/plate'
import {BaseEditor, Descendant} from "slate";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {HistoryEditor} from "slate-history";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, Box, Button, Fab, Snackbar, Stack} from "@mui/material";
import {characterFileName, mentionImageUrlPath, mentionList} from "../pages/guides/mention-list";
import {auth, db, dbErrorHandlerPromise, storageInstance} from "../cc-firestore";
import firebase from "firebase/compat/app";
import {toast} from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';

import {v4 as uuidv4} from 'uuid';

import {MentionCombobox} from "./MentionCombobox";
import {CcHeaderToolbar} from "./cc-header-toolbar";

import css from "./editor.module.scss";
import {LoginModal} from "../topbar/login-modal";
import {boringPlatePlugins} from "./boring-plate-plugins";
import {calculateExpiryTimestamp, TimerLeft} from "./timer-left";
import {DateTime} from "luxon";

const initialEditorValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{text: "Type here to edit."}],
    },
];


type CustomElement = { type: 'paragraph'; children: Descendant[] }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
    }
}


/* dbRef
    .orderBy("createdAt", "desc")
    .get()
    .then((documentSnapshots) => {
        const docs = documentSnapshots.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        const normalizedHistory = docs.map(({createdAt, id, val, createdAtVersion}) => {
            return {
                id,
                createdAt: createdAt.toDate(),
                createdAtVersion: createdAtVersion,
                val: val,
            };
        });*/

export function Editor({pageTitle, categoryPath, editorPath}) {

    const [editorValue, setEditorValue] = useState(initialEditorValue);
    const [currentEditingUser, setCurrentEditingUser] = useState("");
    const [userStartedCurrentEditingSince, setUserStartedCurrentEditingUserSince] = useState("");

    const [isInEditMode, setIsInEditMode] = useState(false);
    /** TODO history */
    const [isLoadedFromServer, setIsLoadedFromServer] = useState(false);


    const [open, setShowSuccessful] = React.useState(false);

    const dbRefHistory = useMemo(() => db.collection(categoryPath).doc(String(editorPath)).collection("history"), [categoryPath, editorPath]);
    const dbRefLatest = useMemo(() => db.collection(categoryPath).doc(String(editorPath)), [categoryPath, editorPath]);


    const unregisterAnyoneIsEditing =() => {
        return dbRefLatest.set({
            currentEditingUser: "",
            userStartedCurrentEditingSince: ""
        }, {merge: true}).then(() => {
        }).catch(dbErrorHandlerPromise);
    };

    const listenUserAuth = (setCurrentUsername) => {
        return auth.onAuthStateChanged((user) => {
            setCurrentUsername(auth.currentUser?.displayName);
        });
    };

    const [currentUsername, setCurrentUsername] = useState("");
    useEffect(() => {
        const listen = listenUserAuth(setCurrentUsername);
        return () => listen();
    }, []);

    // eslint-disable react-hooks/exhaustive-deps
    useEffect(() => {
        if (isInEditMode) {
            return;
        }
        const unsubscribe = dbRefLatest.onSnapshot((doc) => {

            if (doc.exists) {
                const data = doc.data();
                setCurrentEditingUser(data.currentEditingUser);

                if (data.val) {
                    setEditorValue(JSON.parse(data.val));
                }

                const currentEditingSinceDate = data.userStartedCurrentEditingSince === "" ? "" : data.userStartedCurrentEditingSince.toDate();

                // const sessionExpireLimit = -1 * MINUTES_TO_EXPIRE_EDITING_SESSION;
                const minutesFromSessionOfAnyUserExpired = DateTime.now().diff(DateTime.fromJSDate(currentEditingSinceDate), ['minutes']).toObject().minutes;
                if (minutesFromSessionOfAnyUserExpired > 0) {
                    unregisterAnyoneIsEditing();
                    return;
                }

                setUserStartedCurrentEditingUserSince(currentEditingSinceDate);
                setIsLoadedFromServer(true);
                return;
            }

            setUserStartedCurrentEditingUserSince("");
            setCurrentEditingUser("");
            setIsLoadedFromServer(true);
        }, (error) => {
            toast(error);
        })
        //.catch(dbErrorHandlerPromise);
        return unsubscribe;

    }, [isInEditMode]);


    const onSave = () => {

        const editorDataToSave = {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: currentUsername,
            val: JSON.stringify(editorValue),
        };

        const historyPromise = dbRefHistory
            .add(editorDataToSave)
            .then(() => {
                setIsInEditMode(false);
                setShowSuccessful(true);
            })
            .catch(dbErrorHandlerPromise);


        const latestPromise = dbRefLatest.set({
            ...editorDataToSave,
            ...{
                currentEditingUser: "",
                userStartedCurrentEditingSince: ""
            }
        })
            .catch(dbErrorHandlerPromise);

        Promise.all([historyPromise, latestPromise]).then(() => {
            setShowSuccessful(true);
        });
    }

    const editableProps: EditableProps = {
        placeholder: 'Type…',
        style: {
            padding: '0',
            minHeight: "500px"
        },

        readOnly: !isInEditMode && (currentUsername !== currentEditingUser)
    };


    const plugins = createPlugins([
            ...boringPlatePlugins,

            createMentionPlugin({
                key: "@",
                component: MentionElement,
                props: (editor) => {
                    const onMentionClicked = () => {
                        let url = editor.element.url;
                        window.open(url, "_blank");
                    };

                    const renderLabel = (element) => {
                        const url = element.value;
                        const name = characterFileName(element.value);
                        return (
                            <div
                                title={element.url}
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                    cursor: "pointer",
                                    color: "black",
                                    lineHeight: "25px",
                                }}
                            >
                                <img src={mentionImageUrlPath(url)} style={{width: "25px"}} alt={name} title={name}/>
                            </div>
                        );
                    };

                    return {
                        onClick: onMentionClicked,
                        renderLabel: renderLabel
                    };
                },
                options: {
                    trigger: "@",
                    createMentionNode: (item) => {
                        return {
                            id: item.key,
                            value: item.text,
                            url: item.data.filename,
                            filename: item.data.filename,
                        };
                    },
                },
            }),
            createComboboxPlugin(),
            createImagePlugin({
                options: {
                    uploadImage: async (
                        dataUrl: string | ArrayBuffer
                    ) => {
                        const ref = storageInstance.ref("user_images").child(categoryPath).child(editorPath).child(uuidv4());
                        const response = await ref.putString(dataUrl, "data_url", {
                            customMetadata: {
                                uploadedBy: currentUsername
                            }
                        })
                        const downloadUrl = await response.ref.getDownloadURL();
                        return downloadUrl;
                    }
                }
            })
        ],
        {
            components: createPlateUI(),
        });

    const [isLoginModalShown, setIsLoginModalShown] = useState(false);


    const saveButtons = (isInEditMode || currentUsername === currentEditingUser) ?
        <Stack spacing={2} direction="row" sx={{borderRight: "2px solid white"}} pr={1}>
            <Button variant="contained" size={"small"} onClick={onSave}>Save</Button>
            <Button variant="outlined" size={"small"} onClick={() => {

                setIsInEditMode(false);

                unregisterAnyoneIsEditing();

            }}>Cancel</Button>
        </Stack> : null;

    const editModeIcon =    !(isInEditMode || currentEditingUser === currentUsername) && (!currentEditingUser || currentEditingUser !== currentUsername) ?
        <Fab color="primary" aria-label="edit" size="small" onClick={() => {
            if (!currentUsername) {
                setIsLoginModalShown(true);
                return;
            }
            setIsInEditMode(true);

            dbRefLatest.set({
                currentEditingUser: currentUsername,
                userStartedCurrentEditingSince: calculateExpiryTimestamp()
            }, {merge: true}).then(() => {

            })
                .catch(dbErrorHandlerPromise);
        }}>
            <EditIcon/>
        </Fab> : null;

    return (<>
        <Box sx={{pt: 1, pb: 1}}>
            <Card>
                <CardHeader title={
                    <Box justifyContent={"space-between"} display={"flex"} alignItems={"center"}>
                        <div>{pageTitle}</div>
                        {editModeIcon}
                     </Box>}>
                </CardHeader>

                <CardContent>
                    {(!!currentEditingUser && currentEditingUser !== currentUsername) &&
                        <Box py={2}><Alert severity="info"><strong>{currentEditingUser}</strong> is just editing this
                            page, therefore
                            page editing is blocked for: {isLoadedFromServer &&
                                <TimerLeft expiryDate={userStartedCurrentEditingSince}/>}</Alert></Box>}

                    {isLoadedFromServer && (
                        <div className={css.ccPlateEditor}>
                            <Plate initialValue={editorValue}
                                   id={categoryPath + editorPath}
                                   editableProps={editableProps}
                                   onChange={(newValue) => {
                                       setEditorValue(newValue);
                                   }}
                                   plugins={plugins}
                            >
                                {
                                    (isInEditMode || currentEditingUser === currentUsername) && <>
                                        <Box py={2}>
                                            <Alert severity="info">You can start typing @ to reference Crystal
                                                Clash terms with a picture. You can drag and drop images to the editor,
                                                which will be uploaded automatically.
                                                Only one person can edit a page at the same time.
                                                {isLoadedFromServer &&
                                                    <span>Save before timer will perform automatic logout: <TimerLeft
                                                        expiryDate={userStartedCurrentEditingSince}/>  or press "Cancel"</span>}
                                            </Alert>
                                        </Box>
                                        <CcHeaderToolbar saveButtons={ saveButtons} />
                                    </>
                                }

                                <MentionCombobox items={mentionList.map((filename, index) => ({
                                    key: index,
                                    text: filename,
                                    data: {filename, url: filename}
                                }))} pluginKey="@"/>
                            </Plate>
                        </div>
                    )}


                </CardContent>
            </Card>


        </Box>

        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => {
                setShowSuccessful(false);
            }}
            message="Saved"
            anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
            <Alert onClose={() => setShowSuccessful(false)} severity="success" sx={{width: '100%'}}>
                Successful saved
            </Alert>
        </Snackbar>
        <LoginModal {...{isLoginModalShown, setIsLoginModalShown}}/>

    </>);
}