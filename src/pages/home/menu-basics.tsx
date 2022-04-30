import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {Grid, List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../cc-routes-config";

export function MenuBasics() {
    const navigate = useNavigate();
    return (
        <Grid
            item
            xs={3}
        >
            <Card>
                <CardHeader
                    title={"Game Basics"}
                    titleTypographyProps={{align: 'center'}}
                />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                        }}
                    >
                    </Box>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemText primary="Cards" onClick={() => navigate("/cards")}/>
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate(ROUTES["/game-menu/gamemodes"])}>
                            <ListItemText primary="Game Menu"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Gameplay HUD" onClick={() => navigate("/gameplay-hud")}/>
                        </ListItemButton>

                    </List>
                </CardContent>
            </Card>
        </Grid>
    );
}