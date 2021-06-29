import React from "react";
import "./Home.css";
import "./Cube.scss";

function Home() {
  return (
    <div className="cube-div">
      <div className="title-div">
        <div className="paradox-info">
          <h2>par·a·dox</h2>
          <h3>/ˈperəˌdäks/</h3>
          <h4>What is a paradox?</h4>
          <p>
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
      <div className="shapes">
        <div className="infinity">
          {/* <img
            src="https://i.ibb.co/80mjkbV/6718183.png"
            alt="6718183"
            border="0"
          /> */}
          <div className="square">
            {/* <img
              src="https://i.ibb.co/bKjGftr/png-transparent-cube-escher-gradient-mc-escher-optical-illusion.png"
              alt="png-transparent-cube-escher-gradient-mc-escher-optical-illusion"
              border="0"
            /> */}
            {/* <img
              src="https://i.ibb.co/YTMHSsK/png-transparent-beige-optical-illusion-shape-cube-illusion-geometry-3d-cube-assembly-element-angle-3.png"
              alt="png-transparent-beige-optical-illusion-shape-cube-illusion-geometry-3d-cube-assembly-element-angle-3"
              border="0"
            /> */}
          </div>
          <div className="triangle">
            <img
              className="pen-tri"
              src="https://i.ibb.co/Jqw1zfD/Background-copy.png"
              alt="Background-copy"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
