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

import css from "./css-global.module.scss";
import {LoginModal} from "../topbar/login-modal";
import {boringPlatePlugins} from "./boring-plate-plugins";
import {useTimer} from "react-timer-hook";
import {calculateExpiryTimestamp, TimerLeft} from "./timer-left";

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
    const [history, setHistory] = useState([]);
    const [isLoadedFromServer, setIsLoadedFromServer] = useState(false);


    const [open, setOpen] = React.useState(false);

    const dbRefHistory = useMemo(() => db.collection(categoryPath).doc(String(editorPath)).collection("history"), [categoryPath, editorPath]);
    const dbRefLatest = useMemo(() => db.collection(categoryPath).doc(String(editorPath)), [categoryPath, editorPath]);

    function listenUserAuth(setCurrentUsername) {
        return auth.onAuthStateChanged((user) => {
            setCurrentUsername(auth.currentUser?.displayName);
        });
    }

    const [currentUsername, setCurrentUsername] = useState("");
    useEffect(() => {
        const listen = listenUserAuth(setCurrentUsername);
        return () => listen();
    }, []);


    useEffect(() => {
        if (isInEditMode) {
            return;
        }
        const unsubscribe = dbRefLatest.onSnapshot((doc) => {
            setIsLoadedFromServer(true);
            if (doc.exists) {
                const data = doc.data();
                setCurrentEditingUser(data.currentEditingUser);
                setEditorValue(data);

                setUserStartedCurrentEditingUserSince(data.userStartedCurrentEditingSince.toDate());

                return;
            }

            setUserStartedCurrentEditingUserSince("");
            setCurrentEditingUser("");
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
                setOpen(true);
                toast("saved successful");
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
            toast("Successful saved");
        });
    }

    const editableProps: EditableProps = {
        placeholder: 'Type…',
        style: {
            padding: '15px',
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
                        const filename = element.value;
                        return (
                            <div
                                title={element.url}
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                    cursor: "pointer",
                                    color: "black",
                                    lineHeight: "25px",
                                    paddingLeft: "5px"
                                }}
                            >
                                <img src={mentionImageUrlPath(filename)} style={{width: "25px"}}/>
                                <span>{characterFileName(filename)}</span>
                            </div>
                        );
                    };

                    return {
                        onClick: onMentionClicked,
                        renderLabel: renderLabel,
                    };
                },
                options: {
                    trigger: "@",
                    createMentionNode: (item) => {
                        return {
                            id: item.key,
                            value: item.text,
                            url: item.data.url,
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


    return (<>
        <Box sx={{pt: 1, pb: 1}}>
            <Card>
                <CardHeader title={pageTitle}/>

                <CardContent>
                    {(!!currentEditingUser && currentEditingUser !== currentUsername) &&
                        <Box py={2}><Alert severity="info">{currentEditingUser} is just editing this page, therefore
                            page editing is blocked for: {isLoadedFromServer &&
                                <TimerLeft expiryDate={userStartedCurrentEditingSince}/>}</Alert></Box>}

                    {isLoadedFromServer && (
                        <div className={css.ccPlateEditor}>
                            <Plate initialValue={editorValue}
                                   key={1}
                                   id={"1"}
                                   editableProps={editableProps}
                                   onChange={(newValue) => {
                                       setEditorValue(newValue);
                                   }}
                                   plugins={plugins}
                            >
                                {
                                    (isInEditMode || currentEditingUser === currentUsername) ? <>
                                            <Box py={2}>
                                                <Alert severity="info">You can start typing @ to reference Crystal
                                                    Clash terms with a picture. You can drag and drop images to the editor,
                                                    which will be uploaded automatically.
                                                    Only one person can edit a page at the same time.
                                                    {isLoadedFromServer &&
                                                        <TimerLeft expiryDate={userStartedCurrentEditingSince}/>}
                                                </Alert>
                                            </Box>
                                            <CcHeaderToolbar/>
                                        </> :

                                        (!currentEditingUser || currentEditingUser !== currentUsername) &&
                                        <Fab color="primary" aria-label="edit" size="medium" onClick={() => {
                                            if (!currentUsername) {
                                                setIsLoginModalShown(true);
                                                return;
                                            }
                                            setIsInEditMode(true);

                                            dbRefLatest.set({
                                                currentEditingUser: currentUsername,
                                                userStartedCurrentEditingSince: calculateExpiryTimestamp()
                                            }, {merge: true}).then(() => {
                                                toast("You entered edit mode.");
                                            })
                                                .catch(dbErrorHandlerPromise);
                                        }}>
                                            <EditIcon/>
                                        </Fab>

                                }

                                <MentionCombobox items={mentionList.map((filename, index) => ({
                                    key: index,
                                    text: filename,
                                    data: {filename}
                                }))} pluginKey="@"/>
                            </Plate>
                        </div>
                    )}

                    {(isInEditMode || currentUsername === currentEditingUser) &&
                        <Stack spacing={2} direction="row" pt={2}>
                            <Button variant="contained" onClick={onSave}>Save</Button>
                            <Button variant="outlined" onClick={() => {

                                setIsInEditMode(false);

                                dbRefLatest.set({
                                    currentEditingUser: "",
                                    userStartedCurrentEditingSince: ""
                                }, {merge: true}).then(() => {
                                })
                                    .catch(dbErrorHandlerPromise);

                            }}>Cancel</Button>
                        </Stack>}
                </CardContent>
            </Card>


        </Box>

        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => {
                setOpen(false);
            }}
            message="Saved"
            anchorOrigin={{vertical: "top", horizontal: "right"}}
        >
            <Alert onClose={() => setOpen(false)} severity="success" sx={{width: '100%'}}>
                Successful saved
            </Alert>
        </Snackbar>
        <LoginModal {...{isLoginModalShown, setIsLoginModalShown}}/>

    </>);
}