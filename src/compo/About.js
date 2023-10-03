import React from 'react'
import Herosection from './Herosection'

const About = () => {
  const data= {
    name:"Aarti Kumari",
    img:"./images/about.webp"
  };
  return (
   <>
   <Herosection {...data}/>
   </>
  )
}

export default About