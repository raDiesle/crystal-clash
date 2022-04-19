import CardHeader from "@mui/material/CardHeader";
import * as React from "react";
import {Box, Card, CardContent, Grid, List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../cc-routes-config";

export function MenuCommunity() {
    const navigate = useNavigate();
    return (
        <Grid
            item
            xs={3}
        >
            <Card>
                <CardHeader
                    title={"Community"}
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
                                <ListItemButton onClick={() => {
                                    navigate(ROUTES["/community/general"])
                                }}>
                                    <ListItemText primary="Community"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => {
                                    navigate(ROUTES["/community/tutorials"])
                                }}>
                                    <ListItemText primary="Tutorial Videos"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => {
                                    navigate(ROUTES["/community/replays"])
                                }}>
                                    <ListItemText primary="Replays"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => {
                                    navigate(ROUTES["/community/artgallery"])
                                }}>
                                    <ListItemText primary="Art Gallery"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => {
                                    navigate(ROUTES["/community/meme"])
                                }}>
                                    <ListItemText primary="Meme"/>
                                </ListItemButton>
                            </List>

                        </List>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}