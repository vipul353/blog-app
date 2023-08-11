import React, { useEffect, useState } from "react";
import "./blog.css";
import Avatar from "../Assets/avatar.png";
import FaceBook from "../Assets/facebook.svg";
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";
import youtube from "../Assets/youtube.svg";
// import sample from "../Assets/sample.jpg";
import clap from "../Assets/rythm.png";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { contextApi } from "../../App";
// import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
  // const {id} = 
  const [id] = useState(useParams())
  const [mainData,setMainData] = useState({});
  const [bottom ,setBottom] = useState([])

  function getRandomObjectsFromArray(array, numberOfObjects) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    const k = shuffledArray.slice(0, numberOfObjects)
    setBottom(k)
  
  }

  const data  = [...useContext(contextApi)];

  useEffect(()=>{
    // eslint-disable-next-line 
    setMainData(data.find((item)=>item.id==id.id))
    getRandomObjectsFromArray(data,3)   
  },
  // eslint-disable-next-line 
  [id]
  )
  const MoreSerien = ({title,image,index}) => {
    // const navigate = useNavigate();
    console.log(id);
    return (
      <>
        <div className="more-serien" >
          <img src={image} className="more-serien-img" alt="no data" />
          <span className="more-serien-title">
           {title}
          </span>
          <div className="bg-row">
            <div className="bg-inner-row-an">
              <img src={Avatar} alt="no data" className="avt" />
              <div className="blog-clm">
                <span className="blog-auth">Dmitry Nozhenko</span>
                <span className="blog-date">Jan 28, 2019 · 10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="blog-main">
      <div className="bg">
        <span className="blog-title">{
            (mainData.heading!==undefined)&&mainData.heading
           }</span>
        <div className="bg-row">
          <div className="bg-inner-row">
            <img src={Avatar} alt="no data" />
            <div className="blog-clm">
              <span className="blog-auth">Dmitry Nozhenko</span>
              <span className="blog-date">Jan 28, 2019 · 10 min read</span>
            </div>
          </div>
          <div className="bg-inner-row-icon">
            <img src={FaceBook} alt="no data" className="blog-img-icon" />
            <img src={instagram} alt="no data" className="blog-img-icon" />
            <img src={youtube} alt="no data" className="blog-img-icon" />
            <img src={twitter} alt="no data" className="blog-img-icon" />
          </div>
        </div>
        <img className="blog-image" src={
            (mainData.image!==undefined)?mainData.image:""
           } alt="no data" />
        <div className="blog-desc">
        {mainData.description !== undefined && mainData.description}
          Animation in ReactJs is diverse. Developers often use CSS for simple
          animations. For intricate designs, consider GreenSock, the potent
          animation platform. Also, many React libraries and components cater to
          animation needs. Let's delve into these.
        </div>
        <img className="blog-image" src={
            (mainData.image2!==undefined)?mainData.image2:""
           } alt="no data" />
        <div className="clap-row">
          <img src={clap} alt="no data" />
          <span className="clap-count">9.3K claps</span>
        </div>
        <div className="bg-row-an">
          <div className="bg-inner-row">
            <img src={Avatar} alt="no data" />
            <div className="blog-clm">
              <span className="blog-auth">Dmitry Nozhenko</span>
              <span className="blog-date">Jan 28, 2019 · 10 min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-bottom">
        <span className="blog-bottom-title">More From The Siren</span>
        <div className="blog-bottom-row">
          {
            bottom.map((item,index)=>{
              console.log(item);
                return(
                  <>
                 <MoreSerien key={index} title={item.heading===undefined?item.Heading:item.heading} index={item.id} image={item.image} />
                  </>
                )
            
            })
          }
       
          {/* <MoreSerien />
          <MoreSerien /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
