import React from "react";
import "./Loop.css";

function Loop() {
  return (
    <div className="loop-div">
      <div className="loop-info">
        <h1>A Casual Loop</h1>
        {/* <h2>Time Travel</h2> */}
      </div>
      <div className="casual">
        <h4>A Casual Loop</h4>
        <p>
          A causal loop is an interestingly simple paradox of time travel that
          occurs when a future event is the cause of a past event, which in turn
          is the cause of the future event. Both events then exist in spacetime,
          but their origin cannot be determined. A causal loop may involve an
          event, a person or object, or information.The terms boot-strap
          paradox, predestination paradox or ontological paradox are sometimes
          used in fiction to refer to a causal loop.
        </p>
        <p>
          In layman's terms, it means this: the time traveler is in the past,
          which means they were in the past before. Therefore, their presence is
          vital to the future, and they do something that causes the future to
          occur in the same way that their knowledge of the future has already
          happened. It is very closely related to the ontological paradox and
          usually occurs at the same time.
        </p>
        <p>
          Looper (2013) This is most definitely an infinity loop (paradox)
          <p>
            Timeline A-B Joe 1 kills his older self, collects his money,
            retires, and then enters the time machine as a much older person,
            destined for the past (point C). For some reason he is fine with
            dying in the same manner as the Joe he killed, or perhaps is unable
            to resist.{" "}
          </p>
          <p>
            Timeline C-D Joe 2 kills his older self and follows the same path as
            the A-B timeline, the difference here being that he is somehow
            mentally or physically different, which will allow him to escape in
            the E-F timeline. He gets captured and is sent back in time (point
            E).
          </p>
          <p>
            Timeline E-F Joe 2 arrives and escapes Joe 3. How it is possible
            that he is able to escape when the Joe he killed could not escape
            him is unfortunately a huge plot hole, but let's ignore it for now.
            The movie happens. Joe 3 kills himself and Joe 2 dies as well. Time
            progresses to the point where Joe 3 would have grown up and traveled
            back in time. This does not happen. Since Joe 3 has not traveled
            back in time, he never was able to escape a potential Joe 4 which
            leads to the infinity loop. Time snaps back to it's last stable
            point, which is the A-B timeline. The A-B timeline somehow moves
            into the ambiguous C-D timeline where Joe learns the true meaning of
            life or whatever and knows how to escape his younger self when he is
            sent back, and then on to the move timeline of E-F, which ends in a
            paradox which continues the loop back with A-B. Wash, Rinse, Repeat.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Loop;
