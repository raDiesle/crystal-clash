import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function Legions() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Legions" categoryPath="wiki" editorPath="legions"/></Container></>
}