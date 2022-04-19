import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import logo from "../game_logo.png";
import Link from "@mui/material/Link";
import LoginLogout from "./login-logout";
import {IconButton} from "@mui/material";
import FontAwesomeScalableIcon from "../font-awesome-scalable-icon";
import {faSteam} from "@fortawesome/free-brands-svg-icons/faSteam";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons/faMailBulk";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import {TopMenuCenter} from "./top-menu-center";
import {CcBreadcrumbs} from "../header/cc-breadcrumbs";

export function CcAppBar() {
    return (
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

                            </div>
                            <div>
                                <Grid component={"ul"} container>
                                    <LoginLogout/>

                                    <li className="icon steam"><a
                                        href="https://store.steampowered.com/app/1839660/Crystal_Clash/"
                                        target="_blank" rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faSteam}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="https://discord.gg/crystalclash" target="_blank"
                                                            rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faDiscord}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="https://www.facebook.com/CrunchyLeafGames"
                                                            target="_blank" rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faFacebook}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="https://twitter.com/CrunchyLeafGame"
                                                            target="_blank" rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faTwitter}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="https://www.youtube.com/c/crystalclashgame"
                                                            target="_blank" rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faYoutube}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="mailto:info@crunchylg.com" target="_blank"
                                                            rel="noreferrer">
                                        <IconButton aria-label="upload picture" component="span">
                                            <FontAwesomeScalableIcon icon={faMailBulk}/>
                                        </IconButton>
                                    </a></li>
                                    <li className="icon"><a href="https://github.com/raDiesle/crystal-clash"
                                                            target="_blank" rel="noreferrer">
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
    );
}