import {Editor} from "../../editor/editor";
import {NavigateToHome} from "../../header/navigate-to-home";
import {Container} from "@mui/material";

export function PlayGolemChallenge() {
    return <>     <NavigateToHome/> <Container><Editor pageTitle="Play Golem Challenge" categoryPath="wiki" editorPath="playgolemchallenge"/></Container></>
}