import {Editor} from "../../../../editor/editor";
import {DefaultPageContainer} from "../../../../components/default-page-container";

export function DeckbuilderPage() {
    return <DefaultPageContainer><Editor pageTitle="Deckbuilder" categoryPath="wiki" editorPath="deckbuilder"/></DefaultPageContainer>;
}