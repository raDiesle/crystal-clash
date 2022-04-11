import {Box, Tab, Tabs} from "@mui/material";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {a11yProps, TabPanel} from "../../../components/tab-panel";
import {GameModesPage} from "./game-modes/game-modes-page";
import {DeckbuilderPage} from "./deckbuilder/deckbuilderPage";
import {CardVendorPage} from "./card-vendor/card-vendor-page";
import {LeaderboardsPage} from "./leaderboards/leaderboardsPage";
import {UserMenuPage} from "./user-menu/user-menu-page";
import {CcBreadcrumbs} from "../../../header/cc-breadcrumbs";
import {ShopPage} from "./shop/shop-page";


export function GameMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <>
            <>
                <Box sx={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Play: Game Modes" {...a11yProps(0)}/>
                            <Tab label="Deckbuilder" {...a11yProps(1)}/>
                            <Tab label="Card Vendor" {...a11yProps(2)}/>
                            <Tab label="Leaderboards" {...a11yProps(3)}/>
                            <Tab label="Shop" {...a11yProps(4)}/>
                            <Tab label="User Menu" {...a11yProps(5)}/>
                        </Tabs>
                    </Box>

                    <CcBreadcrumbs />

                    <TabPanel value={value} index={0}>
                       <GameModesPage />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <DeckbuilderPage/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CardVendorPage/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <LeaderboardsPage />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <ShopPage />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <UserMenuPage />
                    </TabPanel>
                </Box>
            </>
        </>

    </>
    )
}