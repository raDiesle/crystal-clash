import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function Meme() {
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Meme" categoryPath="wiki" editorPath="meme"/></Container></>
}