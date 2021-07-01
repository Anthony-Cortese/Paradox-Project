import React from "react";
import "./Time.css";

function Time() {
  return (
    <div className="time-div">
      <div className="time-information">
        <h1>The Grandfather Pardox</h1>
        <div className="grand">
          <p>
            Imagine a character traveling back in time to kill her grandfather
            as a young woman. Why would she do this? As a screenwriter, the
            possibilities are endless. Maybe her grandfather turned out to be a
            genocidal dictator, or the inventor of glam rock. Who knows? The
            point is, if the grandfather died, then the time traveler’s parents
            never existed — then neither would the time traveller herself. If
            she didn’t exist, then she wasn’t able to go back in time to begin
            with. And how is that possible if she killed her grandfather?
          </p>

          <h4>Examples in film</h4>
          <p>
            Back to the Future (1985) dramatizes this paradox when ‘80s kid
            Marty McFly goes back to the 1950s and “bumps into his parents,”
            altering the trajectory of their relationship, and imperiling Marty,
            who now may never be born. In this scene, Marty literally begins to
            disappear as it seems his parents will never become a couple.
          </p>
          <p>
            The Terminator (1984), when John Connor sends Kyle Reese to the past
            to save his mother, Sarah, from an artificial intelligence network
            that is trying to wipe out John by killing Sarah before he can even
            come into existence. The famous paradox in The Terminator is that
            Kyle becomes John’s father, then dies in the past. But if he dies in
            the past, how is he sent back from the future to rescue Sarah and
            become John’s father?
          </p>
        </div>
      </div>
    </div>
  );
}
export default Time;
