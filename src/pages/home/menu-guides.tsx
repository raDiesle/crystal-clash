import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {List, ListItemButton, ListItemText} from "@mui/material";
import {CcListWithParent} from "./cc-list-with-parent";
import {useNavigate} from "react-router-dom";

export function MenuGuides() {
    const navigate = useNavigate();
    return (
        <Grid
            item
            xs={3}
        >
            <Card>
                <CardHeader
                    title={"Guides"}
                    titleTypographyProps={{align: 'center'}}
                />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                        }}
                    >

                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                        >

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => navigate("/game-menu")}>
                                    <ListItemText primary="Getting started"/>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => navigate("/game-menu")}>
                                    <ListItemText primary="How to build a deck"/>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => navigate("/game-menu")}>
                                    <ListItemText primary="How to spend resources"/>
                                </ListItemButton>
                            </List>

                            <CcListWithParent parentText="How to play the game">
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => navigate("/guide-2v2")}>
                                        <ListItemText primary="2v2"/>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => navigate("/guide-golem-challenge")}>
                                        <ListItemText primary="Co-Op Challenge"/>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => navigate("/guide-coop-challenge")}>
                                        <ListItemText primary="Golem Challenge"/>
                                    </ListItemButton>
                                    <ListItemButton onClick={() => navigate("/guide-coop-challenge")}>
                                        <ListItemText primary="Custom Game"/>
                                    </ListItemButton>
                                </List>
                            </CcListWithParent>
                        </List>
                    </Box>

                </CardContent>
            </Card>
        </Grid>
    );
}