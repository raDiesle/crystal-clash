import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {GameMenu} from "./pages/basics/game-menu/game-menu";
import {HowToPlay} from "./pages/guides/how-to-play";
import * as React from "react";
import {GameplayHud} from "./pages/basics/gameplay-hud/gameplay-hud";
import {GameModesPage} from "./pages/basics/game-menu/game-modes/game-modes-page";
import {ShopPage} from "./pages/basics/game-menu/shop/shop-page";
import {UserMenuPage} from "./pages/basics/game-menu/user-menu/user-menu-page";
import {GettingStarted} from "./pages/guides/getting-started";
import {HowToBuildDeck} from "./pages/guides/how-to-build-deck";
import {SpendResources} from "./pages/guides/spend-resources";
import {Play2v2} from "./pages/guides/play-2v2";
import {PlayCoopChallenge} from "./pages/guides/play-coop-challenge";
import {PlayGolemChallenge} from "./pages/guides/play-golem-challenge";
import {PlayCustom} from "./pages/guides/play-custom";
import {Community} from "./pages/community/community";
import {Replays} from "./pages/community/replays";
import {UnitTypes} from "./pages/guides/unit-types";
import {Legions} from "./pages/guides/legions";
import {CardsPageTable} from "./pages/basics/cards/cards-page-table";
import {CardDetails} from "./pages/basics/cards/card-details";
import {TutorialVideos} from "./pages/community/tutorial-videos";

export enum ROUTES {
    "/"= "/",
    "/game-menu" = "/game-menu",
    "/game-menu/gamemodes" = "/game-menu/gamemodes",
    "/gameplay-hud" = "/gameplay-hud",
    "/game-menu/shop" = "/game-menu/shop",
    "/game-menu/user-menu" = "/game-menu/user-menu",
    "/cards" ="/cards",
    "/card-details/" = "/card-details/",
    "/guides" ="/guides",
    "/guides/how-to-play" = "/guides/how-to-play",
    "/guides/getting-started" = "/guides/getting-started",
    "/guides/legions" = "/guides/legions",
    "/guides/how-to-build-deck" = "/guides/how-to-build-deck",
    "/guides/unit-types" = "/guides/unit-types",
    "/guides/spend-resources" = "/guides/spend-resources",
    "/guides/play-2v2" = "/guides/play-2v2",
    "/guides/play-coop-challenge" = "/guides/play-coop-challenge",
    "/guides/play-golem-challenge" = "/guides/play-golem-challenge",
    "/guides/play-custom" = "/guides/play-custom",
    "/community/general" = "/community/general",
    "/community/tutorials" = "/community/tutorials",
    "/community/replays" = "/community/replays",
};

export function CcRoutesConfig(){
    return   <Routes>
        <Route path={ROUTES["/"]} element={<Home />} />

        <Route path={ROUTES["/game-menu"]} element={<GameMenu />} />

        <Route path={ROUTES["/cards"]} element={ <CardsPageTable/>} />

        <Route path={`${ROUTES["/card-details/"]}:cardName`} element={ <CardDetails/>} />

        <Route path={ROUTES["/game-menu/gamemodes"]} element={ <GameModesPage/>} />

        <Route path={ROUTES["/game-menu/shop"]} element={ <ShopPage/>} />
        <Route path={ROUTES["/game-menu/user-menu"]} element={ <UserMenuPage/>} />

        <Route path={ROUTES["/gameplay-hud"]} element={<GameplayHud />} />

        <Route path={ROUTES["/guides"]} element={<HowToPlay />} />
        <Route path={ROUTES["/guides/how-to-play"]} element={<HowToPlay />} />
        <Route path={ROUTES["/guides/getting-started"]} element={<GettingStarted />} />
        <Route path={ROUTES["/guides/legions"]} element={<Legions />} />
        <Route path={ROUTES["/guides/how-to-build-deck"]} element={<HowToBuildDeck />} />
        <Route path={ROUTES["/guides/unit-types"]} element={<UnitTypes />} />
        <Route path={ROUTES["/guides/spend-resources"]} element={<SpendResources />} />
        <Route path={ROUTES["/guides/play-2v2"]} element={<Play2v2 />} />
        <Route path={ROUTES["/guides/play-coop-challenge"]} element={<PlayCoopChallenge />} />
        <Route path={ROUTES["/guides/play-golem-challenge"]} element={<PlayGolemChallenge />} />
        <Route path={ROUTES["/guides/play-custom"]} element={<PlayCustom />} />

        <Route path={ROUTES["/community/general"]} element={<Community />} />
        <Route path={ROUTES["/community/tutorials"]} element={<TutorialVideos />} />

        <Route path={ROUTES["/community/replays"]} element={<Replays />} />

    </Routes>
}