import {NavigateToHome} from "../../header/navigate-to-home";
import {Container} from "@mui/material";
import {Editor} from "../../editor/editor";

export function Tierlist() {
    return <>
        <NavigateToHome/>
        <Container>
            <Editor pageTitle="Tierlist" categoryPath="community" editorPath="tierlist"/>
        </Container></>
}