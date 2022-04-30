import {Editor} from "../../editor/editor";
import {Container} from "@mui/material";
import {NavigateToHome} from "../../header/navigate-to-home";

export function HowToBuildDeck() {
    return <>
        <NavigateToHome/>
        <Container><Editor pageTitle="How to build deck" categoryPath="wiki"
                           editorPath="howtobuilddeck"/></Container></>
}