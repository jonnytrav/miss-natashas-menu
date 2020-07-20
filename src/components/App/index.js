import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "../Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
    </div>
  );
}

export default App;
