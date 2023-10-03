
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { AppContext } from '../context';
import React ,{useContext} from 'react';
const Herosection = (props) => {
 const firstName= useContext(AppContext);

  return (
   <Wrapper>
  
  <div className="container grid grid-two-column">
    <div className="section-hero-data">
      <p className='hero-top-data'>THIS IS ME</p>
      <h1 className='hero-heading' >{props.name}</h1>
      <p className='hero-para'>Lorem, ipsum dolor sit amet {firstName} consectetur adipisicing elit. Ratione minus doloremque modi aliquam quia magnam asperiores odio odit. Debitis, hic nam.</p>
   
      <Button className="btn hireme-btn">
 <Link to="/contact">Hire Me</Link>
    </Button>
    </div>
 
    <div className="section-hero-img">
      <picture>
        <img src={props.img} alt='' className='hero-img' />

       
      </picture>
    </div>
  </div>
   </Wrapper>
  )
}
const Wrapper=styled.section`
padding:9rem 0;
.section-hero-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn{
  max-width: 16rem;
}

.hero-top-data{
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
}

.hero-heading{
  text-transform: uppercase;
  font-size: 6.4rem;
}

.hero-para{
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-img{
  display: flex;
  justify-content: center;
  align-items: center;
}
picture{
  text-align: center;
}
.hero-img{
  max-width: 70%;
  height:100%;
}

`;
export default Herosection