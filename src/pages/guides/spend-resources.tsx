import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {CcBreadcrumbs} from "../../header/cc-breadcrumbs";

export function SpendResources() {
    return <>
        <CcBreadcrumbs/><Container><Editor pageTitle="How to spend resources" categoryPath="wiki"
                                           editorPath="spendresources"/></Container></>
}