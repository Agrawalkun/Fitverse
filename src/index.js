import React ,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { useLocation , BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

let theme = createTheme({
    palette:{
        primary :{
            main:"#00040f",
        },
        secondary:{
            main: "#F15C26",
        },
        white:{
            main: "#fff",
        },
    },
});
ReactDOM.render(
<ThemeProvider theme={theme}>
 <BrowserRouter>
 <App/>
 </BrowserRouter>
 </ThemeProvider>,
 document.getElementById("root")
);

serviceWorkerRegistration.register();
