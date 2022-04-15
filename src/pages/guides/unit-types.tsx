import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function UnitTypes(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="Unit Types" categoryPath="wiki" editorPath="unit-types" /></Container></>
}