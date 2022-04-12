import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function GettingStarted(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Getting Started" categoryPath="wiki" editorPath="gettingStarted" /></Container></>
}