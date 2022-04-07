// @ts-nocheck - may need to be at the start of file
import {Editable, ReactEditor, Slate, useFocused, useSelected, withReact} from "slate-react";
import {BaseEditor, createEditor, Descendant, Range, Editor, Transforms} from "slate";
import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {HistoryEditor, withHistory} from "slate-history";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, Button, Snackbar} from "@mui/material";
import {Portal} from "../../portal";
import {mentionList} from "./mention-list";
import {auth, db, dbErrorHandlerPromise} from "../../cc-firestore";
import firebase from "firebase/compat/app";
import {toast} from "react-toastify";





const initialValue : Descendant[] = [
     {
          type: 'paragraph',
        children: [{ text: "Type here to edit. Start typing @ and start letter of Crystal-Clash terms you want to reference. ( e.g. AbilityIcons or CardIcons" }],
     },


//     {
//         "type":"paragraph","children":
//             [
//                 {
//                     "text":"Type here to edit. Start typing \"@\" and start letter of Crystal-Clash terms you want to reference. ( e.g. \"AbilityIcons\" or \"CardIcons\""}]},
//     {"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":""},{"type":"mention","character":"CardIcons\\BlackFreeze.webp","children":[{"text":""}]},{"text":""}]
//
// }

];




type CustomElement = { type: 'paragraph'; children: Descendant[] }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
    }
}



const withMentions = editor => {
    const { isInline, isVoid } = editor

    editor.isInline = element => {
        return element.type === 'mention' ? true : isInline(element)
    }

    editor.isVoid = element => {
        return element.type === 'mention' ? true : isVoid(element)
    }

    return editor
}


const insertMention = (editor, character) => {
    const mention: MentionElement = {
        type: 'mention',
        character,
        children: [{ text: '' }],
    }
    Transforms.insertNodes(editor, mention)
    Transforms.move(editor)
}

const Element = props => {
    const { attributes, children, element } = props
    switch (element.type) {
        case 'mention':
            return <Mention {...props} />
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Mention = ({ attributes, children, element }) => {
    const selected = useSelected()
    const focused = useFocused()
    const characterFileName = element.character.substring(element.character.lastIndexOf("\\") + 1, element.character.lastIndexOf("."));
    return (
        <span
            {...attributes}
            contentEditable={false}
            data-cy={`mention-${element.character.replace(' ', '-')}`}
            style={{
                padding: '3px 3px 2px',
                margin: '0 1px',
                verticalAlign: 'baseline',
                display: 'inline-block',
                borderRadius: '4px',
                backgroundColor: 'grey',
                fontSize: '0.9em',
                boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
            }}
        >
            <img src={"/generated/img/" + element.character} style={{width: "25px"}}/> <span>{characterFileName}</span>
            {children}
    </span>
    )
}

export function HowToPlay(){

    const [editorValue, setEditorValue] = useState(initialValue);

    const [open, setOpen] = React.useState(false);

    const ref = useRef<HTMLDivElement | null>()
    const [target, setTarget] = useState<Range | undefined>()
    const [index, setIndex] = useState(0)
    const [search, setSearch] = useState('')
    const renderElement = useCallback(props => <Element {...props} />, [])
    const editor = useMemo(
        () => withMentions(withReact(withHistory(createEditor()))),
        []
    )

    const chars = mentionList.filter(c =>
        c.toLowerCase().startsWith(search.toLowerCase())
    ).slice(0, 10)

    const onKeyDown = useCallback(
        event => {
            if (target) {
                switch (event.key) {
                    case 'ArrowDown':
                        event.preventDefault()
                        const prevIndex = index >= chars.length - 1 ? 0 : index + 1
                        setIndex(prevIndex)
                        break
                    case 'ArrowUp':
                        event.preventDefault()
                        const nextIndex = index <= 0 ? chars.length - 1 : index - 1
                        setIndex(nextIndex)
                        break
                    case 'Tab':
                    case 'Enter':
                        event.preventDefault()
                        Transforms.select(editor, target)
                        insertMention(editor, chars[index])
                        setTarget(null)
                        break
                    case 'Escape':
                        event.preventDefault()
                        setTarget(null)
                        break
                }
            }
        },
        [index, search, target]
    )

    useEffect(() => {
        if (target && chars.length > 0) {
            const el = ref.current
            const domRange = ReactEditor.toDOMRange(editor, target)
            const rect = domRange.getBoundingClientRect()
            el.style.top = `${rect.top + window.pageYOffset + 24}px`
            el.style.left = `${rect.left + window.pageXOffset}px`
        }
    }, [chars.length, editor, index, search, target])


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
                const normalizedHistory = docs.map(({ createdAt, id, val, createdAtVersion }) => {
                    return {
                        id,
                        createdAt: createdAt.toDate(),
                        createdAtVersion: createdAtVersion,
                        val: val,
                    };
                });
                setHistory(normalizedHistory);
                const lastWikiState = JSON.parse(normalizedHistory[0].val);
                setEditorValue(lastWikiState);
                setIsLoaded(true);

                if (normalizedHistory.length > 0) {
                    // setValue(normalizedHistory[0].val);
                }
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


    return ( <Container sx={{pt: 8, pb: 1}}>
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
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                  Successful saved
                </Alert>
            </Snackbar>
            <CardContent>
                {isLoaded && <Slate editor={editor}
               value={editorValue}

               onChange={(value) => {
                   const { selection } = editor

                   if (selection && Range.isCollapsed(selection)) {
                       const [start] = Range.edges(selection)
                       const wordBefore = Editor.before(editor, start, { unit: 'word' })
                       const before = wordBefore && Editor.before(editor, wordBefore)
                       const beforeRange = before && Editor.range(editor, before, start)
                       const beforeText = beforeRange && Editor.string(editor, beforeRange)
                       const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/)
                       const after = Editor.after(editor, start)
                       const afterRange = Editor.range(editor, start, after)
                       const afterText = Editor.string(editor, afterRange)
                       const afterMatch = afterText.match(/^(\s|$)/)

                       if (beforeMatch && afterMatch) {
                           setTarget(beforeRange)
                           setSearch(beforeMatch[1])
                           setIndex(0)
                           return
                       }
                   }

                   setTarget(null);

                  setEditorValue(value);

               }}
        >
            <Editable
                renderElement={renderElement}
                onKeyDown={onKeyDown}
                placeholder="Enter some text..."
            />
            {target && chars.length > 0 && (
                <Portal>
                    <div
                        ref={ref}
                        style={{
                            top: '-9999px',
                            left: '-9999px',
                            position: 'absolute',
                            zIndex: 1,
                            padding: '3px',
                            background: 'white',
                            borderRadius: '4px',
                            boxShadow: '0 1px 5px rgba(0,0,0,.2)',
                        }}
                        data-cy="mentions-portal"
                    >
                        {chars.map((char, i) => (
                            <div
                                key={char}
                                style={{
                                    padding: '1px 3px',
                                    borderRadius: '3px',
                                    background: i === index ? '#B4D5FF' : 'transparent',
                                }}
                            >
                                {char}
                            </div>
                        ))}
                    </div>
                </Portal>
            )}
    </Slate>}

                <Button variant="contained" onClick={onSave}>Save</Button>
            </CardContent>
        </Card>
    </Container>);
}