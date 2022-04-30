import * as React from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {a11yProps, TabPanel} from "../../components/tab-panel";
import {NavigateToHome} from "../../header/navigate-to-home";
import {Play2v2} from "./play-2v2";
import {PlayGolemChallenge} from "./play-golem-challenge";
import {PlayCoopChallenge} from "./play-coop-challenge";
import {PlayCustom} from "./play-custom";

export function HowToPlay() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="General Play & 2v2" {...a11yProps(0)}/>
                <Tab label="Coop Challenge" {...a11yProps(1)}/>
                <Tab label="Golem Challenge" {...a11yProps(2)}/>
                <Tab label="Custom Game" {...a11yProps(3)}/>
            </Tabs>
        </Box>

        <NavigateToHome/>

        <TabPanel value={value} index={0}>
            <Play2v2/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <PlayCoopChallenge/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <PlayGolemChallenge/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <PlayCustom/>
        </TabPanel>
    </Box>

}