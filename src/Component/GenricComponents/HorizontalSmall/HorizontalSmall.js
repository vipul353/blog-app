import React from "react";
import "./HoriSmall.css";
import SampleImg from "../../Assets/sample.jpg";

const HorizontalSmall = () => {
  return (
    <div className="hori-small">
      <div className="hori-rw">
        <img src={SampleImg} alt="no data"  className="hori-img"/>
        <div className="hori-clm">
          <span className="hori-txt">Catch waves with adventure guide</span>
          <div className="crd-rw">
            <span className="news-sub">Travel</span>
            <span className="new-date">/ August 21 2017</span>
          </div>
        </div>
       <div className="nm-clm">
       <span className="number">
            2{' '}
        </span>
       </div>
      </div>
    </div>
  );
};

export default HorizontalSmall;
