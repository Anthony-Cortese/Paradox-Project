import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="cards-div">
      <div className="card-title">
        <h1>Paradox Examples in every medium</h1>
      </div>
      <div className="movie-ex">
        <h3>Films:</h3>
        <p>
          “The first rule about fight club is you don’t talk about fight club.
          The second rule about fight club is you don’t talk about fight club.”
          (Fight Club)
        </p>
        <p>"Me, I always tell the truth. Even when I lie.” (Scarface)</p>
        <p>
          “I had to come to prison to be a crook.” (The Shawshank Redemption)
        </p>
        <p>“I’m going to make him an offer he can’t refuse.” (The Godfather)</p>
        <p>
          “You never know what worse luck your bad luck has saved you from.” (No
          Country for Old Men)
        </p>
      </div>
    </div>
  );
}

export default Card;
