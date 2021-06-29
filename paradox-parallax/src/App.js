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
import Penrose from "./Penrose";
import SciFi from "./SciFi";
import Music from "./Music";
import Why from "./Why";
import Card from "./Card";

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <Route exact path="./why">
        {/* <Stairs /> */}
      </Route>

      <div className="parallax">
        <div className="parallax__layer parallax__layer--deep">
          <div className="cubes-front">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="type-div">
            <Types />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="scifi-div">
            <SciFi />
          </div>

          <div className="background"></div>
        </div>

        <div className="parallax__layer parallax__layer--base">
          <div className="mcescher-div">
            <Artist />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="inception">
            <Inception />
          </div>

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--deep">
          <div className="stairs-div">
            <Penrose />
          </div>

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="stairs-div">
            <Music />
          </div>
          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="stairs-div">
            <Card />
          </div>
          <div className="background"></div>
        </div>
      </div>

      <Route path="./why">
        <Why />
      </Route>
    </div>
  );
}

export default App;
