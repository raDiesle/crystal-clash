import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function TutorialVideos(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Tutorial Videos" categoryPath="wiki" editorPath="tutorialvideos" /></Container></>
}