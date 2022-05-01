import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {Grid, List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../cc-routes-config";
import {CcListWithParent} from "./cc-list-with-parent";
import css from "./menu.module.scss";

export function MenuBasics() {
    const navigate = useNavigate();
    return (<Card>
                <CardHeader
                    title={"Game Basics"}
                    titleTypographyProps={{align: 'center'}}
                />
                <CardContent>
                    <Box
                        className={css.description}
                    >
                        Explanations of all functionalities you will find in the game menu as well the Ingame HUD during gameplay
                    </Box>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemText primary="Cards" onClick={() => navigate("/cards")}/>
                        </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/gamemodes"])}>
                                    <ListItemText primary="Game Modes"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/deckbuilder"])}>
                                    <ListItemText primary="Deckbuilder"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/card-vendor"])}>
                                    <ListItemText primary="Card Vendor"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/leaderboards"])}>
                                    <ListItemText primary="Leaderboards"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/shop"])}>
                                    <ListItemText primary="Shop"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate(ROUTES["/game-menu/user-menu"])}>
                                    <ListItemText primary="User & Friendlist Menu"/>
                                </ListItemButton>
                            <ListItemButton onClick={() => navigate(ROUTES["/game-menu/quests"])}>
                                <ListItemText primary="Quests"/>
                            </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Gameplay HUD" onClick={() => navigate("/gameplay-hud")}/>
                        </ListItemButton>

                    </List>
                </CardContent>
            </Card>
    );
}