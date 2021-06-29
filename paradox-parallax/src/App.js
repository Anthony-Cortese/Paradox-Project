import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import "./Home.css";
import Artist from "./Artist";
import Home from "./Home";
import Stairs from "./Stairs";
import Types from "./Types";
import Inception from "./Inception";
import Navbar from "./Navbar";
import Why from "./Why";
import SciFi from "./SciFi";

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <Route exact path="./why">
        <Stairs />
      </Route>

      <div className="parallax">
        <div className="parallax__layer parallax__layer--deep">
          <div className="cubes-front">
            <Route exact path="/">
              <Home />
            </Route>
          </div>

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="type-div">
            <Types />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="scifi-div">
            <SciFi />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="mcescher-div">
            <Artist />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="inception">
            <Inception />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--deep">
          <div className="stairs-div">
            <Why />
          </div>
          <div className="background"></div>
        </div>
      </div>
      <Switch>
        <Route path="./why">
          <Stairs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
