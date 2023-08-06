import React from 'react'
import bgImage  from '../Assets/bg-image.jpg'
import './gridStyle.css';
import smImage from '../Assets/sm-image.png';

const GridAlbum = () => {
  return (
    <div className='main-grd'>
        <div className='alb-rw'>
          <div className='bg-img'>
            <img src={bgImage} alt='no data'/>
          </div>
          <div className='vr-alb-cl'>
             <div className='sm-img'>
              <img src={smImage} alt='no data'/>
             </div>
             <div className='sm-img'>
              <img src={smImage} alt='no data'/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default GridAlbum