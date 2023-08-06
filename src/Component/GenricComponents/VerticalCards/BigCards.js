import React from "react";
import "./verticalStyle.css";
import sampleImage from "../../Assets/sample.jpg";

const BigCards = () => {
  return (
    <div className="main-cards">
      <div className="main-ver-cards">
        <img src={sampleImage} className="crd-img" alt="no data" />
        <div className="crd-txt">
          <span className="crd-txt-heading">
            Joshua Tree Overnight Adventure
          </span>
          <span className="crd-txt-subtitle">
            Gujarat is vastly underrated and it’s a mystery to us why the region
            isn’t more well-known as a tourist destination. It has a plethora of
            temples and palaces
          </span>
          <div className="crd-rw">
            <span className="news-sub">Travel</span>
            <span className="new-date">/ August 21 2017</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
