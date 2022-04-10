import {Box, Card, CardContent, Container, Grid, List, ListItemButton, ListItemText} from "@mui/material";
import * as React from "react";

import gameplayHudScreenshot from "./game_hud.jpg";

export function GameplayHud() {

    return (<>
            <Grid container spacing={5} p={10}>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Box>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Ingame Settings"/>
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText primary="Game Resources Hud"/>
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText primary="Game Deck Hud"/>
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText primary="Game Result Summary"/>
                                    </ListItemButton>

                                </List>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box px={3}>
                <img src={gameplayHudScreenshot} style={{width: "100%"}}/>
            </Box>
        </>
    )
}