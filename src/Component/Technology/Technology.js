import React from 'react'
import HorizontalCards from '../GenricComponents/HorizontalCards/HorizontalCards'
import HorizontalSmall from '../GenricComponents/HorizontalSmall/HorizontalSmall'
import Horizontalmedium from '../GenricComponents/HorizontalMedium/Horizontalmedium'
import { Titles } from '../HomePage/HomePage'
import AllAdes from '../GenricComponents/AllAdes'

const Technology = () => {
  return (
    <div className="BolyMain">
    <div className="bolyColm-one">
     <Titles title={'Technology'}/>
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

export default Technology