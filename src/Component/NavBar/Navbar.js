import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="title">
          <span className="title-the">THE</span>
          <span className="title-siren">Siren</span>
        </div>
        <div className="nv-link">
          <Link to={'/'} className="span">Home</Link>
          <Link to={'/Bollywood'} className="span">Bollywood</Link>
          <Link to={'/Techonoly'} className="span">Technology</Link>
          <Link  to={'/Hollywood'} className="span">Hollywood</Link>
          <Link to={'/Fitness'} className="span">Fitness</Link>
          <Link to={'/Food'}  className="span">Food</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
