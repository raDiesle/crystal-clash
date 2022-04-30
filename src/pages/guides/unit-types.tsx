import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function UnitTypes() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="Unit Types" categoryPath="wiki" editorPath="unit-types"/></Container></>
}