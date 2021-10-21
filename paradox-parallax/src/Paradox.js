import React from "react";
import "./Paradox.css";

function Paradox() {
  return (
    <div className="cube-div">
      <div className="title-div">
        <div className="paradox-info">
          <h2 className="para-title">par·a·dox</h2>
          <h3 className="pro">/ˈperəˌdäks/</h3>
          <h4 className="what">What is a paradox?</h4>
          <p className="para-para">
            A paradox is a statement, proposition, or situation that seems
            illogical, absurd or self-contradictory, but which, upon further
            scrutiny, may be logical or true — or at least contain an element of
            truth. Paradoxes often express ironies and incongruities and attempt
            to reconcile seemingly opposing ideas. Paradoxes express something
            of the conflicting, often confounding, nature of human affairs, and
            even of meaning itself.
          </p>
        </div>
      </div>
      <div className="triangle">
        <div className="penrose-triangle">
          <div className="side"></div>
          <div className="side"></div>
          <div className="side"></div>
        </div>
      </div>

      {/* <div className="triangle">
        <img
          className="pen-tri"
          src="https://i.ibb.co/Jqw1zfD/Background-copy.png"
          alt="Background-copy"
          border="0"
        />
      </div> */}
    </div>
  );
}

export default Paradox;
