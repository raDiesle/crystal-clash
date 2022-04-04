import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import logo from "./game_logo.png";
import {faSteam} from "@fortawesome/free-brands-svg-icons/faSteam";
import {IconButton} from "@mui/material";
import FontAwesomeScalableIcon from "./font-awesome-scalable-icon";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faMailchimp} from "@fortawesome/free-brands-svg-icons/faMailchimp";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons/faMailBulk";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            @Copyright {new Date().getFullYear()}
        </Typography>
    );
}


function PricingContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    backgroundColor: (theme) => `${theme.palette.primary.main}`
                }}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Grid container>
                    <img src={logo} alt="logo" style={{width: "142px"}}/>

                    <nav style={{width: "calc(100% - 150px)"}}>

                    <Grid container flexWrap={"nowrap"} justifyContent={"space-between"} alignContent={"center"} alignItems={"center"}>

                        <div>
                        <Grid component={"ul"}   container >

                            <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Wiki
                        </Link>

                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Cards
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Deckmanager
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Leaderboards
                        </Link>
                        </Grid>
                        </div>
<div>
                        <Grid component={"ul"} container>
                            <li className="icon steam"><a
                                href="https://store.steampowered.com/app/1839660/Crystal_Clash/" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faSteam} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="https://discord.gg/crystalclash" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faDiscord} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="https://www.facebook.com/CrunchyLeafGames" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faFacebook} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="https://twitter.com/CrunchyLeafGame" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faTwitter} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="https://www.youtube.com/c/crystalclashgame" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faYoutube} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="mailto:info@crunchylg.com" target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faMailBulk} />
                                </IconButton>
                            </a></li>
                            <li className="icon"><a href="https://github.com/BrokenGamesUG/rise-of-legions"
                                                    target="_blank">
                                <IconButton aria-label="upload picture" component="span">
                                    <FontAwesomeScalableIcon icon={faGithub} />
                                </IconButton>
                            </a></li>
                        </Grid>
                        </div>
                    </Grid>
                    </nav>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}

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
                                        How to play guide for Rise of Legions
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
            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Copyright sx={{mt: 5}}/>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}


export function Template() {
    return <PricingContent/>;


}