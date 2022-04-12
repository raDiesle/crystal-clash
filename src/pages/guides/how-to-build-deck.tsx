import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function HowToBuildDeck(){
    return <>
        <CcBreadcrumbs/>
        <Container><Editor pageTitle="How to build deck" categoryPath="wiki" editorPath="howtobuilddeck" /></Container></>
}