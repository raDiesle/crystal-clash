import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../cc-routes-config";

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
                                <ListItemButton onClick={() =>{navigate((ROUTES["/guides/getting-started"]))}}>
                                    <ListItemText primary="Getting started"/>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => {navigate(ROUTES["/guides/how-to-build-deck"])}}>
                                    <ListItemText primary="How to build a deck"/>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => {navigate(ROUTES["/guides/spend-resources"])}}>
                                    <ListItemText primary="How to spend resources"/>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => {navigate(ROUTES["/guides/how-to-play"])}}>
                                    <ListItemText primary="How to play the game"/>
                                </ListItemButton>
                            </List>

                        </List>
                    </Box>

                </CardContent>
            </Card>
        </Grid>
    );
}