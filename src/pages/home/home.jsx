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
            <Container sx={{pt: 2, pb: 1}}>
                the Rise of Legions guide for Legions, Leagues, Stages and more written and maintained by the players.
                Please feel free to contribute by creating new articles or expanding existing ones.

                About Rise of Legions
                Rise of Legions is a free-to-play castle siege RTS set in a rich fantasy world. It is the first game by
                Broken Games UG.
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
                <Grid container spacing={5}>

                    <MenuBasics/>

                    <MenuGuides />

                    <MenuCommunity />

                </Grid>
            </Container>
        </>
    )
}