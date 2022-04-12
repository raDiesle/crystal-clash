import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function Community(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Community" categoryPath="wiki" editorPath="community" /></Container></>
}