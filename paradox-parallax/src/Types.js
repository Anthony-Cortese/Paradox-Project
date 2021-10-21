import React from "react";
import "./Types.css";
import "./Types.scss";

function Types() {
  return (
    <div className="types-div">
      <div className="typewriter">
        <h1 className="line-1 anim-typewriter">Literary Paradox</h1>
      </div>
      <div className="write">
        <h2 className="line-2 anim-typewriter1">Writing Paradox</h2>
      </div>
      <div className="why">
        <h2>Why they are important in literature</h2>
        <p>
          As a literary device, paradox functions as a means of setting up a
          situation, idea, or concept that appears on the surface to be
          contradictory or impossible. However, with further thought,
          understanding, or reflection, the conflict is resolved due to the
          discovery of an underlying level of reason or logic. This is effective
          in that a paradox creates interest and a need for resolution on the
          part of the reader for understanding. This allows the reader to invest
          in a literary work as a means of deciphering the meaning of the
          paradox. It’s important for writers to construct proper paradox so
          that the meaning is not lost for the reader. Paradox is dependent upon
          two elements: 1 a statement or situation which initially appears
          contradictory; 2 the statement or situation that appears contradictory
          must, after consideration, be a logical or well-founded premise. Here
          are some ways that writers benefit from incorporating metaphor into
          their work
        </p>

        <h3>Set Up Conflict</h3>
        <p>
          Paradox is an excellent literary device as a means of setting up
          conflict in a work of literature. A paradoxical situation or idea in a
          literary work creates tension and potential suspense for the reader.
          For example, a literary character may find themselves in a situation
          where they must go against law and order as a means of preserving law
          and order. This type of paradox generates interest for the reader in
          terms of anticipating the resolution of the conflict.
        </p>

        <h3>Create Irony</h3>
        <p>
          Paradox is a way for writers to create verbal or situational irony. In
          a broad sense, irony itself is a literary device in which what appears
          to be said, expected, or taking place on the surface of a literary
          work is very different from what is actually the case. Paradox often
          creates irony in literature, which can deepen the meaning for the
          reader through humor or a sense of realism due to the complexity and
          often contradictory ways in which humans behave.
        </p>
      </div>
      <div className="book">
        <img
          className="cover"
          src="http://www.coverbrowser.com/image/batman-dark-knight-returns/1-1.jpg"
          alt="book"
        />
      </div>
    </div>
  );
}

export default Types;
