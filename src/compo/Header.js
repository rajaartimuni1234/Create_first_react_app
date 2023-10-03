import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainHeader>
 <NavLink to ="/">
    <h3 className='logo'>KMOW ME</h3>
 </NavLink>
 <Nav />
    </MainHeader>
  )
}

const MainHeader=styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo{
  font-size: 25px;
  font-family:'Poppins',sans-serif;
  text-decoration: none;
  color:white;
  background-color: rgb(13, 13, 14);
  padding: 1px 4px;
  letter-spacing: 3px;
}
`;
export default Header