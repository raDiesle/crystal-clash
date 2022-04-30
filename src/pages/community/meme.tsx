import {NavigateToHome} from "../../header/navigate-to-home";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function Meme() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Meme" categoryPath="wiki" editorPath="meme"/></Container></>
}