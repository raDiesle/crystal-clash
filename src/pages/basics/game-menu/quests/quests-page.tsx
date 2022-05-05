import {Editor} from "../../../../editor/editor";
import {DefaultPageContainer} from "../../../../components/default-page-container";

export function QuestsPage() {
    return <DefaultPageContainer><Editor pageTitle="Quests" categoryPath="wiki" editorPath="quests"/></DefaultPageContainer>;
}