import {Box, Card, CardContent, Container, Grid, List, ListItemButton, ListItemText, Tab, Tabs} from "@mui/material";
import * as React from "react";

import gameplayHudScreenshot from "./game_hud.jpg";

import {Editor} from "../../../editor/editor";
import {CcBreadcrumbs} from "../../../header/cc-breadcrumbs";
import {a11yProps, TabPanel} from "../../../components/tab-panel";

export function GameplayHud() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (<>
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Ingame HUD" {...a11yProps(0)}/>
                    <Tab label="Endgame Summary" {...a11yProps(1)}/>
                </Tabs>
            </Box>

            <CcBreadcrumbs/>


            <TabPanel value={value} index={0}>
                <Editor pageTitle="Ingame HUD" categoryPath="wiki" editorPath="ingame-hud"/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Editor pageTitle="Endgame Summary" categoryPath="wiki" editorPath="endgame-summary"/>
            </TabPanel>


            <Box px={3}>
                <img src={gameplayHudScreenshot} style={{width: "100%"}}/>
            </Box>
        </Box>
        </>
    )
}