import React, { useContext } from "react";
import "./Home.css";
import GridAlbum from "../GridAlbum/GridAlbum";
import BigCards from "../GenricComponents/VerticalCards/BigCards";
import HorizontalCards from "../GenricComponents/HorizontalCards/HorizontalCards";
import HorizontalSmall from "../GenricComponents/HorizontalSmall/HorizontalSmall";
import bgImage from "../Assets/bg-image.jpg";
import { contextApi } from "../../App";


export const Titles = ({ title }) => {
  return (
    <>
      <span className="sveral-title">{title}</span>
    </>
  );
};
 

const LastBoxes = ({isBorder}) => {
  return (
    <>
      <div className="last-boxes" style={isBorder?{borderInline:'3px solid #F0F0F0'}:{borderInline:'none'}}>
        <span className="last-boxes-title">
          Catch waves with an adventure guide
        </span>
        <span className="last-boxes-sub">
          Gujarat is vastly underrated and it’s a mystery to us why the region
          isn’t more well-known as a tourist destination. It has a plethora of
          temples and palaces Gujarat is vastly underrated and it’s a mystery to
          us why the region isn’t more well-known as a tourist destination. It
          has a plethora of temples and palaces
        </span>
        <div className="crd-rw">
            <span className="news-sub">Travel</span>
            <span className="new-date">/ August 21 2017</span>
          </div>
      </div>
    </>
  );
};

const HomePage = () => {
  const data = useContext(contextApi)
  console.log(data);
  return (
    <>
      <GridAlbum />
      <div className="HomeMain">
        <Titles title={"The Latest"} />
        <div className="home-row">
          {
            data.map((item,index)=>{
              if (item.cat === 'Latest') {
                return(
                  <>
                   <BigCards key={index} title={item.heading} image={item.image} description={item.description} cat={item.cat} />
                  </>
                )
              }else return(
              <>
              </>);
            
            })
          }
        </div>
        <Titles title={"Latest Articles"} />
        <div className="home-clm-main">
          <div className="home-row">
            <div className="home-clm-main">
              {
                data.map((item,index)=>{
                   if ((item.cat === 'technology')&&((index>19)&&(index<24))) {
                    return(
                      <HorizontalCards key={index} index={index} title={item.Heading} image={item.image} description={item.Description} cat={item.cat} />
                    )
                   } else {
                    return(
                      <>
                      </>
                    )
                   } 
                })
              }

              <div className="home-bg-img">
                <img src={bgImage} alt="no data" />
              </div>
            </div>
            <div className="home-clm-width">
              <div className="ads"></div>
              {
                data.map((item,index)=>{
                  console.log();
                   if ((item.cat === 'fitness')&&((index>30)&&(index<35))) {
                    return(
                      <HorizontalSmall key={index} title={item.Heading} index={index} image={item.image} cat={item.cat} />
                    )
                   } else {
                    return(
                      <>
                      </>
                    )
                   } 
                })
              }
           
              {/* <HorizontalSmall />
              <HorizontalSmall />
              <HorizontalSmall /> */}
            </div>
          </div>
        </div>
        <Titles title={"Latest Stories"} />
        <div className="last-box">
          <LastBoxes />
          <LastBoxes isBorder={true} />
          <LastBoxes />
        </div>
      </div>
    </>
  );
};

export default HomePage;
