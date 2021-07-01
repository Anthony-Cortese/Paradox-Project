import React from "react";
import "./Artist.css";

function Artist() {
  return (
    <div className="artist-div">
      <div className="artist-info">
        <h1>MC ESCHER</h1>
        <p>
          It depicts a world in which the normal laws of gravity do not apply.
          The architectural structure seems to be the centre of an idyllic
          community, with most of its inhabitants casually going about their
          ordinary business, such as dining. There are windows and doorways
          leading to park-like outdoor settings. All of the figures are dressed
          in identical attire and have featureless bulb-shaped heads. Identical
          characters such as these can be found in many other Escher works. In
          the world of Relativity, there are three sources of gravity, each
          being orthogonal to the two others. Each inhabitant lives in one of
          the gravity wells, where normal physical laws apply. There are sixteen
          characters, spread between each gravity source, six in one and five
          each in the other two. The apparent confusion of the lithograph print
          comes from the fact that the three gravity sources are depicted in the
          same space. The structure has seven stairways, and each stairway can
          be used by people who belong to two different gravity sources. This
          creates interesting phenomena, such as in the top stairway, where two
          inhabitants use the same stairway in the same direction and on the
          same side, but each using a different face of each step; thus, one
          descends the stairway as the other climbs it, even while moving in the
          same direction nearly side by side. In the other stairways,
          inhabitants are depicted as climbing the stairways upside-down, but
          based on their own gravity source, they are climbing normally. Each of
          the three parks belongs to one of the gravity wells. All but one of
          the doors seem to lead to basements below the parks. Though physically
          possible, such basements are certainly unusual and add to the surreal
          effect of the picture.
        </p>
      </div>
      <div className="escher-img">
        <img
          className="img2"
          src="https://i.ibb.co/qdbTD7m/Esche-Relativity.gif"
          alt="Esche-Relativity"
          border="0"
        />
        <img
          className="img1"
          src="https://i.ibb.co/y6vgKcV/The-paradox-described-by-the-famous-artist-Escher-s-Art-Gallery.jpg"
          alt="The-paradox-described-by-the-famous-artist-Escher-s-Art-Gallery"
          border="0"
        />
      </div>
      <div className="new-slide">
        <p>
          The best known examples of Penrose stairs appears in a couple of
          famous lithographs by M.C. Escher and this brings us to Christopher
          Nolan’s Inception, a film that is billed as a story about dreams but
          also delves deeper into our fascination with paradox.
        </p>
      </div>
    </div>
  );
}

export default Artist;
