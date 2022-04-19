import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function Artgallery() {
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Art Gallery" categoryPath="wiki" editorPath="artgallery"/></Container></>
}