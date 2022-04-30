import {NavigateToHome} from "../../header/navigate-to-home";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function Artgallery() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Art Gallery" categoryPath="wiki" editorPath="artgallery"/></Container></>
}