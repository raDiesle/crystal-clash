import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import {faMailBulk} from "@fortawesome/free-solid-svg-icons/faMailBulk";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {Route, Routes} from 'react-router-dom';

import {Home} from './pages/home/home';
import {HowToPlay} from "./pages/guides/how-to-play";
import LoginLogout from "./topbar/login-logout";

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

                            <Grid container flexWrap={"nowrap"} justifyContent={"space-between"} alignContent={"center"}
                                  alignItems={"center"}>

                                <div>
                                    <Grid component={"ul"} container>

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
                                        <LoginLogout />

                                        <li className="icon steam"><a
                                            href="https://store.steampowered.com/app/1839660/Crystal_Clash/"
                                            target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faSteam}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="https://discord.gg/crystalclash" target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faDiscord}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="https://www.facebook.com/CrunchyLeafGames"
                                                                target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faFacebook}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="https://twitter.com/CrunchyLeafGame"
                                                                target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faTwitter}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="https://www.youtube.com/c/crystalclashgame"
                                                                target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faYoutube}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="mailto:info@crunchylg.com" target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faMailBulk}/>
                                            </IconButton>
                                        </a></li>
                                        <li className="icon"><a href="https://github.com/BrokenGamesUG/rise-of-legions"
                                                                target="_blank">
                                            <IconButton aria-label="upload picture" component="span">
                                                <FontAwesomeScalableIcon icon={faGithub}/>
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


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="guides" element={<HowToPlay />} />
            </Routes>


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