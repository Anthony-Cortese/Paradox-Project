import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import "./Paradox.css";

import Stairs from "./Stairs";
import HomePage from "./HomePage";

import Navbar from "./Navbar";

import Why from "./Why";
import Book from "./Book";

function App() {
  return (
    <div className="main-div">
      <Navbar />

      <Route exact path="/why">
        <Stairs />
      </Route>
      {/* <Book /> */}
      <Route exact path="/">
        <HomePage />
      </Route>

      {/* <Route path="./why">
        <Why />
      </Route> */}
    </div>
  );
}

export default App;
