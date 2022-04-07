import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import * as React from "react";
import {Link} from "react-router-dom";

export function Home(){
    return (
        <>
        <Container sx={{pt: 8, pb: 1}}>
            the Rise of Legions guide for Legions, Leagues, Stages and more written and maintained by the players.
            Please feel free to contribute by creating new articles or expanding existing ones.

            About Rise of Legions
            Rise of Legions is a free-to-play castle siege RTS set in a rich fantasy world. It is the first game by
            Broken Games UG.
        </Container>
    <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
        >
            Crystal Clash Manager
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
            Explose Crystal Clash
        </Typography>
    </Container>

    <Container maxWidth="xl" component="main">
        <Grid container spacing={5}>

            <Grid
                item
                xs={3}
            >
                <Card>
                    <CardHeader
                        title={"Guides"}
                        subheader={"getting started"}
                        titleTypographyProps={{align: 'center'}}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{}}
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
                        </Box>
                        <ul>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                            >
                                <Link to="/guides">How to play guide for Rise of Legions</Link>



                                System requirements
                                Release date
                                Game support
                                "How to start out" guide by KillerDeath on Steam
                            </Typography>

                        </ul>
                    </CardContent>
                </Card>
            </Grid>


            <Grid
                item
                xs={3}
            >
                <Card>
                    <CardHeader
                        title={"Basics"}
                        subheader={"To get started"}
                        titleTypographyProps={{align: 'center'}}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{}}
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
                            {/*<Typography component="h2" variant="h3" color="text.primary">*/}
                            {/*    What*/}
                            {/*</Typography>*/}
                        </Box>
                        <ul>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                            >
                                Installing the Game
                                User Interface
                                Gameplay
                                Gamemodes
                                Deckbuilder
                                Shop
                            </Typography>

                        </ul>
                    </CardContent>
                </Card>
            </Grid>

            <Grid
                item
                xs={3}
            >
                <Card>
                    <CardHeader
                        title={"Legions"}
                        subheader={"to play"}
                        titleTypographyProps={{align: 'center'}}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{}}
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
                        </Box>
                        <ul>
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                            >
                                Black Legion
                                Blue Legion
                                Green Legion
                                White Legion
                                Crystal Legion
                            </Typography>

                        </ul>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
        </>
    )
}