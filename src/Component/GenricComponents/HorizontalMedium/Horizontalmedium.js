import React from 'react'
import './medium.css';
// import sample from '../../Assets/sample.jpg';

const Horizontalmedium = ({title,image,index,cat}) => {
  return (
    <div className='medi-main'>
        <img src={image} alt='no data' className='medi-img'/>
        <div className='medi-row'>
          <span className='medi-titlle'>
          {title}
          </span>
          <span className='number'>
                 {index}
          </span>
        </div>
        <div className="crd-rw">
              <span className="news-sub">{cat}</span>
              <span className="new-date">/ August 21 2017</span>
        </div>
    </div>
  )
}

export default Horizontalmedium