import CardHeader from "@mui/material/CardHeader";
import * as React from "react";
import {Box, Card, CardContent, Grid, List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function MenuCommunity(){
    const navigate = useNavigate();
    return(
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
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                        >
                            <List component="div" disablePadding>
                                <ListItemButton onClick={() => navigate("/game-menu")}>
                                    <ListItemText primary="Redeem Codes"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate("/game-menu")}>
                                    <ListItemText primary="Youtube & Twitch"/>
                                </ListItemButton>
                                <ListItemButton onClick={() => window.location.href= "https://www.reddit.com/r/CrystalClashOfficial/"}>
                                    <ListItemText primary="Discussions"/>
                                </ListItemButton>
                            </List>

                        </List>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}