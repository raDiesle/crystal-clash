import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function Replays() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Replays" categoryPath="wiki" editorPath="replays"/></Container></>
}