import React from "react";
import { Route } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../theme.js";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import About from "../About";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Route path="/" component={Header}></Route>
        <Route path="/home" component={LandingPage}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
