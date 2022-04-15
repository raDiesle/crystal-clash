import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function Legions(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Legions" categoryPath="wiki" editorPath="legions" /></Container></>
}