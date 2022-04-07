// @ts-nocheck - may need to be at the start of file
import {ReactEditor} from "slate-react";
import {EditableProps} from 'slate-react/dist/components/editable';
import {
    createAlignPlugin,
    createBlockquotePlugin,
    createBoldPlugin,
    createCodeBlockPlugin,
    createCodePlugin,
    createComboboxPlugin,
    createFontBackgroundColorPlugin,
    createFontColorPlugin,
    createHeadingPlugin,
    createImagePlugin,
    createIndentListPlugin,
    createIndentPlugin,
    createItalicPlugin,
    createLineHeightPlugin,
    createListPlugin,
    createMediaEmbedPlugin,
    createMentionPlugin,
    createParagraphPlugin,
    createPlateUI,
    createPlugins,
    createStrikethroughPlugin,
    createTablePlugin,
    createUnderlinePlugin,
    MentionElement,
    Plate
} from '@udecode/plate'
import {BaseEditor, Descendant} from "slate";
import * as React from "react";
import {useEffect, useState} from "react";
import {HistoryEditor} from "slate-history";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, Button, Snackbar} from "@mui/material";
import {characterFileName, mentionImageUrlPath, mentionList} from "../pages/guides/mention-list";
import {auth, db, dbErrorHandlerPromise, storageInstance} from "../cc-firestore";
import firebase from "firebase/compat/app";
import {toast} from "react-toastify";
import {MentionCombobox} from "./MentionCombobox";
import {CcHeaderToolbar} from "./cc-header-toolbar";


const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{text: "Type here to edit. Start typing @ and start letter of Crystal-Clash terms you want to reference. ( e.g. AbilityIcons or CardIcons"}],
    },
];


type CustomElement = { type: 'paragraph'; children: Descendant[] }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
    }
}


export function Editor() {

    const [editorValue, setEditorValue] = useState(initialValue);

    const [open, setOpen] = React.useState(false);


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

    const [isInEditMode, setIsInEditMode] = useState(false);
    const [history, setHistory] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (isInEditMode) {
            return;
        }
        const dbRef = db.collection("wiki").doc(String("howToPlay")).collection("history");
        dbRef
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
                });
                setHistory(normalizedHistory);

                if (normalizedHistory.length > 0) {
                    const lastWikiState = JSON.parse(normalizedHistory[0].val);
                    setEditorValue(lastWikiState);
                }
                setIsLoaded(true);

            })
            .catch(dbErrorHandlerPromise);
    }, [isInEditMode]);

    const onSave = () => {
        const dbRef = db.collection("wiki").doc(String("howToPlay")).collection("history");
        dbRef
            .add({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                createdBy: currentUsername,
                val: JSON.stringify(editorValue),
            })
            .then(() => {
                setIsInEditMode(false);
                setOpen(true);
                toast("saved successful");
            })
            .catch(dbErrorHandlerPromise);
    }

    const editableProps: EditableProps = {
        placeholder: 'Type…',
        style: {
            padding: '15px',
        },

        readOnly: false
    };

    const plugins = createPlugins([
            // elements
            createParagraphPlugin(),      // paragraph element
            createBlockquotePlugin(),     // blockquote element
            createCodeBlockPlugin(),      // code block element
            createHeadingPlugin(),        // heading elements

            createListPlugin(),
            createIndentPlugin(),
            createIndentListPlugin(),

            createFontColorPlugin(),
            createFontBackgroundColorPlugin(),
            createLineHeightPlugin(),

            createAlignPlugin(),
            createTablePlugin(),

            createMediaEmbedPlugin(),

            // marks
            createBoldPlugin(),           // bold mark
            createItalicPlugin(),         // italic mark
            createUnderlinePlugin(),      // underline mark
            createStrikethroughPlugin(),  // strikethrough mark
            createCodePlugin(),           // code mark

            createMentionPlugin({
                key: "@",
                component: MentionElement,
                props: (editor) => {
                    const onMentionClicked = () => {
                        let url = editor.element.url;
                        console.log("Opening url", url);
                        window.open(url, "_blank");
                    };

                    const renderLabel = (element) => {
                        const filename = element.value;
                        return (
                            <div
                                title={element.url}
                                style={{display: "flex", alignContent: "center", cursor: "pointer", color: "black", lineHeight: "25px", paddingLeft: "5px"}}
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

                    const ref = storageInstance.ref().child("image3.png");
                    const response = await ref.putString(dataUrl, "data_url")
                      const downloadUrl = await response.ref.getDownloadURL();
                     return downloadUrl;
                    }
                }
            })
            // createMentionPlugin({ key: '@', component: MentionElement, options: { trigger: '@', inputCreation: {key: 'creationId', value: 'main'} } }),
        ],
        {
            components: createPlateUI(),
        });


    return (<Container sx={{pt: 8, pb: 1}}>
        <Card>
            <CardHeader
                title={"A Guide"}
                subheader={"Edit contents below"}
                titleTypographyProps={{align: 'center'}}
                subheaderTypographyProps={{
                    align: 'center',
                }}
                sx={{}}
            />

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={() => {
                    setOpen(false);
                }}
                message="Note archived"
                anchorOrigin={{vertical: "top", horizontal: "right"}}
            >
                <Alert onClose={() => setOpen(false)} severity="success" sx={{width: '100%'}}>
                    Successful saved
                </Alert>
            </Snackbar>

            <CardContent>
                {isLoaded && (
                    <Plate initialValue={editorValue}

                           key={1}
                           id={"1"}
                           editableProps={editableProps}
                           onChange={(newValue) => {
                               setEditorValue(newValue);
                           }}
                           plugins={plugins}
                    >
                       <CcHeaderToolbar/>

                        <MentionCombobox items={mentionList.map((filename, index) => ({
                            key: index,
                            text: filename,
                            data: {filename}
                        }))} pluginKey="@"/>

                    </Plate>)}
                <Button variant="contained" onClick={onSave}>Save</Button>
            </CardContent>
        </Card>
    </Container>);
}