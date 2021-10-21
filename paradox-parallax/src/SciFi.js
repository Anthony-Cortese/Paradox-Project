import React from "react";
import "./SciFi.css";

function SciFi() {
  return (
    <div className="sci-fi">
      <div className="scifi-info">
        <h1 className="sci-title">Science Fiction Paradox</h1>
        <h2>Time Travel</h2>
        <h5>
          A temporal paradox, time paradox, or time travel paradox is a paradox,
          an apparent contradiction, or logical contradiction associated with
          the idea of time and time travel. In physics, temporal paradoxes fall
          into two broad groups: consistency paradoxes exemplified by the
          grandfather paradox; and causal loops.[1] Other paradoxes associated
          with time travel are a variation of the Fermi paradox and paradoxes of
          free will that stem from causal loops such as Newcomb's paradox.
        </h5>
      </div>
      <div className="sci-fi1">
        <div className="loops"></div>

        <div className="predest">
          <h4 className="hawke">The Predestination Paradox</h4>
          <p>
            A predestination paradox, also called either a causal loop, or a
            causality loop, and (less frequently) either a closed loop or closed
            time loop, is a paradox of time travel. It exists when a time
            traveler is caught in a loop of events that "predestines" his or her
            journey back in time. Because of the possibility of influencing the
            past while time traveling, one way of explaining why history does
            not change is by saying that whatever has happened must happen. A
            time traveler attempting to alter the course of history in this
            model would only be playing their part in shaping history as we
            already know it, rather than changing any aspects of the past. This
            is regardless of the time traveler's intentions or efforts to
            preserve their personal experience, or knowledge, of events.
          </p>
          {/* <img
            src="https://i.ibb.co/Fq0zBjz/Predestination.png"
            alt="Predestination"
            border="0"
          /> */}
        </div>
        <div className="bootstrap">
          <h4>The Bootstrap Paradox</h4>
          <p>
            For those that don’t know, the bootstrap paradox goes like this. A
            time traveler really likes Beethoven, so he goes back in time to
            meet him. When the time traveler arrives, he discovers that
            Beethoven isn’t there, he seemingly doesn’t exist. Luckily the time
            traveler brought his copies of Beethoven’s music to be signed. So he
            takes some modern day paper and ink and copies all of the music down
            and publishes the music under the name Beethoven. The time traveler
            effectively becomes Beethoven. So now the question is, who wrote
            Beethoven’s 5th?
          </p>
          <p>
            Tenet(2020) Here’s where we get to the bootstrap in Tenet. From my
            interpretation of the film, the Protagonist goes and starts Tenet
            and Prosperity and all of that. Why? Because he knew they existed in
            the past, so they had to be created in the future. But then where
            does the idea of Tenet come from? Also, there are a few times where
            before they go into the portal, it almost seems as if they don’t
            think about going in until themselves on the other side. Bootstrap
            paradox, the idea was never created, it was alert there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SciFi;
