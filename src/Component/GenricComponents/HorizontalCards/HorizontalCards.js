import React from "react";
import "./HariStyle.css";
import sampleImg from "../../Assets/sample.jpg";
const HorizontalCards = () => {
  return (
    <div className="main-cards">
      <div className="hariMain">
        <div className="hari-rw">
          <img src={sampleImg} className="hari-image" alt="no data" />
          <div className="hari-clm">
            <span className="hari-txt">
              Catch waves with an adventure guide
            </span>
            <span className="hari-sub">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-
            </span>
            <div className="crd-rw">
              <span className="news-sub">Travel</span>
              <span className="new-date">/ August 21 2017</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
