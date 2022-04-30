import {Box, Tab, Tabs} from "@mui/material";
import * as React from "react";
import {a11yProps, TabPanel} from "../../../components/tab-panel";
import {GameModesPage} from "./game-modes/game-modes-page";
import {DeckbuilderPage} from "./deckbuilder/deckbuilderPage";
import {CardVendorPage} from "./card-vendor/card-vendor-page";
import {LeaderboardsPage} from "./leaderboards/leaderboardsPage";
import {UserMenuPage} from "./user-menu/user-menu-page";
import {NavigateToHome} from "../../../header/navigate-to-home";
import {ShopPage} from "./shop/shop-page";
import {Link, useLocation} from "react-router-dom";
import {ROUTES} from "../../../cc-routes-config";


export function GameMenu() {
     const location = useLocation();

    const gameMenuRoutes: ROUTES[]  = [ROUTES["/game-menu/gamemodes"], ROUTES["/game-menu/deckbuilder"], ROUTES["/game-menu/card-vendor"], ROUTES["/game-menu/leaderboards"], ROUTES["/game-menu/shop"], ROUTES["/game-menu/user-menu"]];

    const [value, setValue] = React.useState(gameMenuRoutes.findIndex((route) => route === location.pathname));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // @ts-ignore
        setValue(newValue);
    };
    return (
        <>
            <>
                <>
                    <Box sx={{width: '100%'}}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Play: Game Modes" {...a11yProps(0)}
                                     component={Link}
                                     to={gameMenuRoutes[0]}
                                />
                                <Tab label="Deckbuilder" {...a11yProps(1)}
                                     component={Link}
                                     to={gameMenuRoutes[1]}
                                />
                                <Tab label="Card Vendor" {...a11yProps(2)}
                                     component={Link}
                                     to={gameMenuRoutes[2]}
                                />
                                <Tab label="Leaderboards" {...a11yProps(3)}
                                     component={Link}
                                     to={gameMenuRoutes[3]}
                                />
                                <Tab label="Shop" {...a11yProps(4)}
                                     component={Link}
                                     to={gameMenuRoutes[4]}
                                />
                                <Tab label="User Menu" {...a11yProps(5)}
                                     component={Link}
                                     to={gameMenuRoutes[5]}
                                />
                            </Tabs>
                        </Box>

                        <NavigateToHome/>

                        <TabPanel value={value} index={0}>
                            <GameModesPage/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <DeckbuilderPage/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <CardVendorPage/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <LeaderboardsPage/>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <ShopPage/>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <UserMenuPage/>
                        </TabPanel>
                    </Box>
                </>
            </>

        </>
    )
}