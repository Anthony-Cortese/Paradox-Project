import React from "react";
import "./Penrose.css";
import "./Stairs.css";

function Why() {
  return (
    <div className="why-div">
      <div className="inception-img">
        <img
          src="https://i.ibb.co/NsgGXhF/Penrose.png"
          alt="Penrose"
          border="0"
        />
      </div>
      <div className="statement">
        <h3 className="h3-headers"></h3>
        <p className="why-info">
          In one dream sequence, Arthur uses the Penrose stairs to show Ariadne
          how to disguise the boundaries of the dreams she built as a novice
          architect. From a certain perspective, the staircase appears to climb
          or descend infinitely, but look differently and you can see they cut
          off abruptly. Arthur calls this “paradoxical architecture.”
        </p>
        <h3 className="h3-headers"></h3>
        <p className="why-info">
          Arthur: In a dream you can cheat architecture into impossible shapes.
          That lets you create closed loops, like the Penrose steps. The
          infinite staircase. See...
        </p>
        <h3 className="h3-headers"></h3>
        <p className="why-info">
          [The staircase he and Ariadne have been climbing up suddenly shifts
          up.]
        </p>
        <h3 className="h3-headers"></h3>
        <p className="why-info">
          Arthur: ...paradox. So a closed loop liked that will help you disguise
          the boundaries of the dream you create.
        </p>
      </div>
    </div>
  );
}

export default Why;
