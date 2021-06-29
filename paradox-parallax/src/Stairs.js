import React from "react";
import "./Stairs.css";

function Stairs() {
  return (
    <div className="stairs-div">
      <div className="stairs stairs--layer">
        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>

        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
      </div>
      <div className="block"></div>
      <div className="stairs">
        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>

        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
        <div className="level">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
      </div>

      <div className="statement">
        <h3 className="h3-headers">To begin with,</h3>
        <p className="why-info">
          My favorite film has always been Inception, that is where my
          infatuation with paradoxes began
        </p>
        <h3 className="h3-headers">From There</h3>
        <p className="why-info">
          That led me to MC Escher and all of his artwork. The staircase in
          Inception was used based on his art piece "Relativity
        </p>
        <h3 className="h3-headers">Continuing</h3>
        <p className="why-info">
          Being an enormous fan of Cinema, I realized that one of my favorite
          types of film dealt with Time Travel. With Time Travel that brings up
          many, many different time travel paradoxes which just intrigues me so
          much!
        </p>
        <h3 className="h3-headers">And Lastly</h3>
        <p className="why-info">
          In doing research about Paradoxes I discovered that they come up a lot
          more than one would expect. They are in story-telling, musical lyrics,
          everyday speech, and so much more. So I wanted to gather some of my
          absolute favorites that I have come across and create a website with
          everything I have come to learn about the simple Paradox!
        </p>
      </div>

      {/* <div className="stairs-info">
        <h1>Paradoxical Architecture</h1>
        <h3>
          Arthur: In a dream you can cheat architecture into impossible shapes.
          That lets you create closed loops, like the Penrose steps. The
          infinite staircase. See...
        </h3>
        <h3>
          [The staircase he and Ariadne have been climbing up suddenly shifts
          up.]
        </h3>
        <h3>
          Arthur: ...paradox. So a closed loop liked that will help you disguise
          the boundaries of the dream you create.
        </h3>
        <p>
          In one dream sequence, Arthur (Joseph Gordon-Levitt) uses the Penrose
          stairs to show Ariadne (Ellen Page) how to disguise the boundaries of
          the dreams she built as a novice architect. From a certain
          perspective, the staircase appears to climb or descend infinitely, but
          look differently and you can see they cut off abruptly. Arthur calls
          this “paradoxical architecture.”
        </p>
      </div> */}
    </div>
  );
}

export default Stairs;
