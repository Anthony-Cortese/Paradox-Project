import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-div">
      <div className="navbar-title">
        <Link to="./">
          <img
            className="paradox-img"
            src="https://i.ibb.co/0K4J3j7/paradox12.png"
            alt="paradox12"
            border="0"
          />
        </Link>
      </div>
      <div className="links">
        <Link to="./why">
          <nav className="why">Why Paradox?</nav>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
