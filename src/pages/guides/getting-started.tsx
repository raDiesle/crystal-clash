import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function GettingStarted() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Getting Started" categoryPath="wiki" editorPath="gettingStarted"/></Container></>
}