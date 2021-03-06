import React from "react";
import "./Inception.css";
function Inception() {
  return (
    <div className="inception-div">
      <div className="penrose-stairs">
        <div className="stairs-info">
          <p className="inception-font">
            {" "}
            Scenes in the film look like M. C. Escher’s work set in both real
            and alternate worlds. The plot blurs realities, captures the
            imagination, and invites viewers to explore our interpretations of
            what is real or not. Christopher Nolan has found a way to captivate
            audiences using contradictory sets and defying acts of gravity that
            are awe-inspiring. Several moments captured my attention and made me
            more aware of my own thought process regarding paradox in
            contemporary art.
          </p>
          <img
            className="img-stairs"
            src="https://i.ibb.co/tpkP5tS/1200px-Impossible-staircase-svg.png"
            alt="1200px-Impossible-staircase-svg"
            border="0"
          />
        </div>
      </div>
      <div className="inception-info">
        <h1 className="inception-title">INCEPTION</h1>
        <p className="descriptions">
          in·cep·tion
          <p className="descriptions">/inˈsepSH ə n/ </p>
          <p className="descriptions">
            the establishment or starting point of an institution or activity.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Inception;
