import React from "react";
import "./Why.css";
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
    </div>
  );
}

export default Why;
