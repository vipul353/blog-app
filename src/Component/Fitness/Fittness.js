import React, {useContext} from 'react'
import { Titles } from '../HomePage/HomePage'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import AllAdes from '../GenricComponents/AllAdes'
// import { useContext } from 'react'
import { contextApi } from '../../App'

const Fittness = () => {
  const data = useContext(contextApi)
  return (
    <div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Fittness'}/>
     {data.map((item, index) => {
          if (item.cat === "fitness" && index >= 30 && index <= 36) {
            return (
              <HorizontalCards
                key={index}
                index={index}
                title={item.Heading}
                image={item.image}
                description={item.Description}
                cat={item.cat}
              />
            );
          } else {
            return <></>;
          }
        })}
     {/* <HorizontalCards/> */}
    </div>
    <div className="bolyColm-two">
      <Titles title={'Top Posts'}/>
      {data.map((item, index) => {
          console.log();
          if (item.cat === "fitness" && index >= 37 && index < 39) {
            return (
              <>
                {
                  (index === 37)&& <Horizontalmedium cat={item.cat} image={item.image} index={index} title={item.Heading}/>
                }
               { (index >= 38 && index < 39)&&<HorizontalSmall
                  key={index}
                  title={item.Heading}
                  index={index}
                  image={item.image}
                  cat={item.cat}
                />}
              </>
            );
          } else {
            return <></>;
          }
        })}
      <AllAdes/>
    </div>
  </div>
  )
}

export default Fittness