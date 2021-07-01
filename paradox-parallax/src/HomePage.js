import React from "react";
import "./App.css";
import Artist from "./Artist";
import Paradox from "./Paradox";
import Types from "./Types";
import Inception from "./Inception";
import Penrose from "./Penrose";
import SciFi from "./SciFi";
import Music from "./Music";
import Card from "./Card";

function HomePage() {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--deep">
        <div className="cubes-front">
          <Paradox />
        </div>

        <div className="background">{/* <Inception /> */}</div>
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
        <div className="stairs-div">
          <Music />
        </div>

        <div className="background"></div>
      </div>
      <div className="parallax__layer parallax__layer--deep">
        <div className="stairs-div">
          <Inception />
        </div>

        <div className="background"></div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <div className="stairs-div">
          <Penrose />
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
  );
}

export default HomePage;
