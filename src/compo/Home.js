import React, {useContext} from 'react'
import Herosection from './Herosection'

const Home = () => {



  const data={
    name:"KNOW ME",
    img:"./images/home_imge.webp",
  };
  return (
   <>
  
 <Herosection {...data}/>
   </>

  )
}

export default Home