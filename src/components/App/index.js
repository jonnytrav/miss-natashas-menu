import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header";
import LandingPage from "../LandingPage";
import Menu from "../Menu";
import Gallery from "../Gallery";

function App() {
  return (
    <div className="bg-slanted h-screen pt-10">
      <Route path="/" component={Header}></Route>
      <div className="w-4/5 border border-white mx-auto -mt-8 pt-20 rounded-lg shadow-lg bg-white bg-opacity-50">
        <Route path="/home" component={LandingPage}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/gallery" component={Gallery}></Route>
      </div>
    </div>
  );
}

export default App;
