import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import About from "../About";

function App() {
  return (
    <div className="w-full h-64 flex-col">
      <Route path="/" component={Header}></Route>
      <Route path="/home" component={LandingPage}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
