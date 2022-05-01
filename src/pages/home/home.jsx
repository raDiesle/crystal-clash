import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {MenuBasics} from "./menu-basics";
import {MenuGuides} from "./menu-guides";
import {MenuCommunity} from "./menu-community";

export function Home() {
    return (
        <>
            <Container sx={{pt: 2, pb: 1, justifyContent: "center", display: "flex"}}>
                Crystal Clash is a hybrid of MOBA, Tower Defense and Deckbuilding game
            </Container>
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 1, pb: 2}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Crystal Clash Manager
                </Typography>
            </Container>

            <Container maxWidth="xl" component="main">
                <Grid container spacing={5} flexWrap={"wrap"}>
                    <Grid
                        item
                        xs
                    >
                        <MenuBasics/>
                    </Grid>

                    <Grid
                        item
                        xs
                    >
                        <MenuGuides/>
                    </Grid>

                    <Grid
                        item
                        xs
                    >
                        <MenuCommunity/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}