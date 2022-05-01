import {Editor} from "../../editor/editor";
import {NavigateToHome} from "../../header/navigate-to-home";
import Container from "@mui/material/Container";

export function PlayCoopChallenge() {
    return <>     <NavigateToHome/> <Container><Editor pageTitle="Play Coop Challenge" categoryPath="wiki" editorPath="playcoopchallenge"/></Container></>
}