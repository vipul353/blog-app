import React from 'react'
import './medium.css';
import sample from '../../Assets/sample.jpg';

const Horizontalmedium = () => {
  return (
    <div className='medi-main'>
        <img src={sample} alt='no data' className='medi-img'/>
        <div className='medi-row'>
          <span className='medi-titlle'>
          Catch waves with an adventure guide
          </span>
          <span className='number'>
                 2
          </span>
        </div>
        <div className="crd-rw">
              <span className="news-sub">Travel</span>
              <span className="new-date">/ August 21 2017</span>
        </div>
    </div>
  )
}

export default Horizontalmedium