import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {GameMenu} from "./pages/basics/game-menu/game-menu";
import {HowToPlay} from "./pages/guides/how-to-play";
import * as React from "react";
import {GameplayHud} from "./pages/basics/gameplay-hud/gameplay-hud";
import {GameModesPage} from "./pages/basics/game-menu/game-modes/game-modes-page";
import {ShopPage} from "./pages/basics/game-menu/shop/shop-page";
import {UserMenuPage} from "./pages/basics/game-menu/user-menu/user-menu-page";

export enum ROUTES {
    "/"= "/",
    "/game-menu" = "/game-menu",
    "/game-menu/gamemodes" = "/game-menu/gamemodes",
    "/gameplay-hud" = "/gameplay-hud",
    "/guides" ="/guides",
    "/game-menu/shop" = "/game-menu/shop",
    "/game-menu/user-menu" = "/game-menu/user-menu"
};

export function CcRoutesConfig(){
    return   <Routes>
        <Route path={ROUTES["/"]} element={<Home />} />

        <Route path={ROUTES["/game-menu"]} element={<GameMenu />} />

        <Route path={ROUTES["/game-menu/gamemodes"]} element={ <GameModesPage/>} />

        <Route path={ROUTES["/game-menu/shop"]} element={ <ShopPage/>} />
        <Route path={ROUTES["/game-menu/user-menu"]} element={ <UserMenuPage/>} />

        <Route path={ROUTES["/gameplay-hud"]} element={<GameplayHud />} />

        <Route path={ROUTES["/guides"]} element={<HowToPlay />} />
    </Routes>
}