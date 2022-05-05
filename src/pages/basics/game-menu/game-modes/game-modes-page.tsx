import {Editor} from "../../../../editor/editor";
import {DefaultPageContainer} from "../../../../components/default-page-container";


export function GameModesPage() {
    return <DefaultPageContainer>
        <Editor pageTitle="Game Modes" categoryPath="wiki" editorPath="gamemodes"/>
    </DefaultPageContainer>
}