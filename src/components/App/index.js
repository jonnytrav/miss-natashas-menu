import React from "react";
import { Route } from "react-router-dom";

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../../themes/theme.js";
import useStyles from "./appStyling.js";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import About from "../About";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Route path="/" component={Header}></Route>
      <Route path="/home" component={LandingPage}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
