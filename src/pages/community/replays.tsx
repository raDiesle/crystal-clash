import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function Replays(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Replays" categoryPath="wiki" editorPath="replays" /></Container></>
}