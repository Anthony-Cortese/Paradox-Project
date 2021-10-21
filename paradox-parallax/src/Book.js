import React from "react";
import "./Types.css";

function Book() {
  return (
    <div className="frame">
      <div className="book">
        <a href="#">
          <ul>
            <li className="page page3"></li>
            <li className="page page2"></li>
            <li className="page page1"></li>
            <li className="cover">Book Cover</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default Book;
