import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import About from "../About";

function App() {
  return (
    <div className="bg-sky h-screen">
      <Route path="/" component={Header}></Route>
      <div className="w-4/5 border-2 border-white mx-auto -mt-4 pt-20 rounded-lg">
        <Route path="/home" component={LandingPage}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </div>
  );
}

export default App;
