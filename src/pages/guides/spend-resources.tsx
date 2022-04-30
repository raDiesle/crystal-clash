import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function SpendResources() {
    return <>
        <NavigateToHome/><Container><Editor pageTitle="How to spend resources" categoryPath="wiki"
                                            editorPath="spendresources"/></Container></>
}