import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import About from "../About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
      <Route path="/home" component={LandingPage}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
