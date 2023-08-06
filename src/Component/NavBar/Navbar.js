import React from "react";
import "./nav.css";
function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="title">
          <span className="title-the">THE</span>
          <span className="title-siren">Siren</span>
        </div>
        <div className="nv-link">
          <span className="span">Home</span>
          <span className="span">Bollywood</span>
          <span className="span">Technology</span>
          <span className="span">Hollywood</span>
          <span className="span">Fitness</span>
          <span className="span">Food</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
