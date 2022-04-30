import {NavigateToHome} from "../../header/navigate-to-home";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function TutorialVideos() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Tutorial Videos" categoryPath="wiki" editorPath="tutorialvideos"/></Container></>
}