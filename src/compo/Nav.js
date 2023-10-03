import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    const Nav= styled.nav `
    .navbar-list{
        display: flex;
    gap: 4.8rem;
    list-style: none; 

    .navbar-link{
        

        &:link,
     &:visited{
    display: inline-block;
    text-decoration: none;
    font-size: 1.7rem;
   
    transition: color 0.3s linear;
    text-transform: uppercase;
    color:${({theme})=> theme.colors.black};
   
}
&:hover,
&:active{
    color:${({theme})=> theme.colors.helper};
}

    }
    }
    `

  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'> 
                <li>
                    <Link to="/" className='navbar-link'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='navbar-link'>About</Link>
                </li>
                
                <li>
                    <Link to="/service" className='navbar-link'>Severice</Link>
                </li>

                <li>
                    <Link to="/contact" className='navbar-link'>Contact</Link>
                </li>
                </ul> 

        </div>
    </Nav>
  )
 
}

export default Nav