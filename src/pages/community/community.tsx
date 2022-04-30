import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function Community() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Community" categoryPath="wiki" editorPath="community"/></Container></>
}