import {Editor} from "../../../../editor/editor";
import {DefaultPageContainer} from "../../../../components/default-page-container";

export function LeaderboardsPage() {
    return <DefaultPageContainer><Editor pageTitle="Leaderboards" categoryPath="wiki"
                                         editorPath="leaderboards"/></DefaultPageContainer>;
}