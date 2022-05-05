import React from 'react';
import './app.css';
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
        // MuiFormLabel : {
        //     root : {
        //         MuiFormLabel: {
        //             root : {
        //                 MuiInputLabel : {
        //                     sx : {color: "red"}
        //                 }
        //             }
        //         }
        //     }
        // },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "#5a8484"
                    }
                }
            }
        },
        MuiCard : {
            styleOverrides : {
                  root : {
                      overflow: "visible"
                  }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: "#3c5b5e",
                    padding: "6px 16px",
                    fontWeight: "bold"
                },
                title: {
                    color: "rgba(233, 254, 255, 0.937)", // #5a8484
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                underlineAlways: true,
                root: {
                    color: "#fff"
                }
            }
        },
        MuiTabs: {
            defaultProps: {
                sx: {
                    //  height: "100px"
                }
            },

        },
        MuiTab: {
            defaultProps: {
                sx: {
                    lineHeight: "2.0",
                    fontSize: "16px"
                }
            },
            styleOverrides: {
                "root": {
                    "&.Mui-selected": {
                        "color": "#282e39",
                        "fontWeight": "bold",
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
                    backgroundColor: "rgb(184, 253, 255)",
                    color: "#282e39",
                    '&:hover': {
                        color: "rgb(90, 132, 132)"
                    }
                },
                outlined: {
                    color: "rgb(184, 253, 255)",
                    borderColor: "rgb(90, 132, 132)",
                    '&:hover': {
                        color: "#fff",
                        borderColor: "#fff",
                    }
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {

                root: { // MuiToggleButton-root.Mui-selected
                    padding: 2,
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: "white",
                        backgroundColor: "#70b7b7"
                    }
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {

                root: {
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    color: "#fbe629",

                    "&:hover": {
                        //  backgroundColor: "#3c5b5e",
                    }
                }
            }
        },
        MuiSvgIcon: {
            defaultProps: {
                sx: {
                    color: "#70b7b7"
                }
            }
        },
        MuiFab : {
            styleOverrides : {
                root : {
                   boxShadow: "0px 3px 5px -1px rgb(255 255 255 / 20%), 0px 6px 10px 0px rgb(255 255 255 / 14%), 0px 1px 18px 0px rgb(255 255 255 / 15%)"
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
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#70b7b7',
                    },
                    '& label.Mui-focused': {
                        color: '#fff',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#70b7b7',
                        },
                        '&:hover fieldset': {
                            borderColor: '#3E68A8',
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    },
                },
            },
        },
        /* below doesnt work */
        MuiOutlinedInput : {

            styleOverrides: {

                root: {
                    sx : ({
                        backgroundColor : "red",
                        '& fieldset.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'green !important',
                        },
                       })
                },
            },
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
