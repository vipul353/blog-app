import React from 'react'
import { Titles } from '../HomePage/HomePage'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import AllAdes from '../GenricComponents/AllAdes'

const Food = () => {
  return (
    <div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Food'}/>
     <HorizontalCards/>
     <HorizontalCards/>
     <HorizontalCards/>
     <HorizontalCards/>
     <HorizontalCards/>
     <HorizontalCards/>
     <HorizontalCards/>
     {/* <HorizontalCards/> */}
    </div>
    <div className="bolyColm-two">
      <Titles title={'Top Posts'}/>
      <Horizontalmedium/>
      <HorizontalSmall/>
      <HorizontalSmall/>
      <HorizontalSmall/>
      <HorizontalSmall/>
      <AllAdes/>
    </div>
  </div>
  )
}

export default Food