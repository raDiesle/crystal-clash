import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {List, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../cc-routes-config";
import css from "./menu.module.scss";

export function MenuGuides() {
    const navigate = useNavigate();
    return (<Card sx={{minHeight: "100%"}}>
        <CardHeader
            title={"Guides"}
            titleTypographyProps={{align: 'center'}}
        />
        <CardContent>
            <Box
                className={css.description}
            >
                Opinionated articles explaining recommendations how to master Crystal Clash from the experts
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
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
                            navigate((ROUTES["/guides/getting-started"]))
                        }}>
                            <ListItemText primary="Getting started"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/legions"])
                        }}>
                            <ListItemText primary="Legions"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/how-to-build-deck"])
                        }}>
                            <ListItemText primary="How to build a deck"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/unit-types"])
                        }}>
                            <ListItemText primary="Types of Units"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/spend-resources"])
                        }}>
                            <ListItemText primary="How to spend resources"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/how-to-play"])
                        }}>
                            <ListItemText primary="How to play 2v2"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/play-golem-challenge"])
                        }}>
                            <ListItemText primary="How to play Solo Golem Challenges"/>
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(ROUTES["/guides/play-coop-challenge"])
                        }}>
                            <ListItemText primary="How to play Coop Golem Challenges"/>
                        </ListItemButton>
                    </List>


                </List>
            </Box>

        </CardContent>
    </Card>);
}