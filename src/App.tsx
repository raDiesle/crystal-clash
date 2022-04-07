import React from 'react';
import './App.css';
import {Template} from "./template";
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
    MuiCardHeader : {
      styleOverrides : {
        root : {
          backgroundColor: "#3c5b5e"
        },

      title : {
        color: "#5a8484",
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
    <Template/>
    </BrowserRouter>
    </ThemeProvider>);
}

export default App;
