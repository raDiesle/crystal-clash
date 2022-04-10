import React from 'react';
import './App.css';
import {PageTemplate} from "./page-template";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter} from 'react-router-dom';
import {toast} from "react-toastify";


export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#202F38',
            light: '#5a8484',
            contrastText: '#5a8484',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#282e39',
            default: 'rgba(119,141,154,0.6)',
        },
        text: {
            primary: "rgb(230, 230, 230)", // #1e1d1d
            // primary: '#83FFFF',
            secondary: 'rgba(233, 254, 255, 0.9373)',
        },
        divider: "#70b7b7"
    },
    components: {
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: "#3c5b5e"
                },
                title: {
                    color: "rgba(233, 254, 255, 0.937)", // #5a8484
                }
            }
        },
        MuiLink : {
            styleOverrides : {
                underlineAlways :true,
                root : {
                    color: "#fff"
                }
            }
        },
        MuiTab : {
            styleOverrides: {
                "root": {
                    "&.Mui-selected": {
                        "color": "#282e39",
                        "fontWeight" : "bold",
                        "background": "#70b7b7",
                       // "transform": "scale(1.2)"
                    }
                }
            }
        }
        ,
        MuiButton: {
            styleOverrides: {

                contained: {
                    backgroundColor: "#3c5b5e",
                    color: "#282e39",
                    '&:hover': {
                        color: "rgb(90, 132, 132)"
                    }
                },
                outlined: {
                    color: "rgb(90, 132, 132)",
                    borderColor: "rgb(90, 132, 132)",
                    '&:hover': {
                        color: "#fff",
                        borderColor: "#fff",
                    }
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {


                root: {
                    paddingTop: "2px",
                    paddingBottom: "2px",

                    "&:hover": {
                        //  backgroundColor: "#3c5b5e",
                    }
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        color: "#282e39",
                        textShadow: "0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff",
                        fontWeight: "bold",
                        "& svg": {
                            fill: "#282e39"
                        }
                    },
                }
            }
        }
    }
};

const myTheme = createTheme(themeOptions);

function App() {
    toast.configure();
    return (<ThemeProvider theme={myTheme}>
        <BrowserRouter>
            <PageTemplate/>
        </BrowserRouter>
    </ThemeProvider>);
}

export default App;
