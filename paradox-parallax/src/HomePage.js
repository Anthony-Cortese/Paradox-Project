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
import Time from "./Time";
import Loop from "./Loop";
import Book from "./Book";

function HomePage() {
  return (
    <div className="overall-div">
      {/* <Book /> */}
      <div className="parallax">
        <div className="parallax__layer parallax__layer--deep">
          <div className="cubes-front">
            <Paradox />
          </div>

          <div className="background">{/* <Inception /> */}</div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <Types />

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          <div className="scifi-div">
            <SciFi />
          </div>

          <div className="background"></div>
        </div>

        <div className="parallax__layer parallax__layer--back">
          {/* <Artist /> */}
          <Time />

          <div className="background"></div>
        </div>

        <div className="parallax__layer parallax__layer--deep">
          <div className="mcescher-div">{/* <Loop /> */}</div>
          <div className="background"></div>
        </div>

        <div className="parallax__layer parallax__layer--base">
          <div className="mcescher-div">
            <Artist />
          </div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <Inception />

          <div className="background"></div>
        </div>
        <div className="parallax__layer parallax__layer--base">
          {/* <div className="stairs-div">
          <Music />
        </div> */}
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
    </div>
  );
}

export default HomePage;
