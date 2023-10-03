import React from 'react'
import About from './compo/About'
import Contact from './compo/Contact'
import Severice from './compo/Severice'
import Home from './compo/Home'
import Header from './compo/Header'
import Footer from './Footer'
import { Gobalstyle } from './Gobalstyle'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from "react-router-dom"
const App = () => {

  const theme={
    colors: {
      heading:"rgb(24 24 29)",
      text:"rgb(24 24 29)",
      white:"fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255)",
      footer_bg:"#0a1435",
      btn:"rgba(98,84,243,0.5)",
      hr:"#fff",
      gradient:
      "linear-gradient(0deg, rbg(132 144 255) 0% , rgb(98 189 252) 100%)",
      shadow:
      "rgba(0,0,0,0.02) 0px 1px 3px 0px, rbga(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: 'rbga(0,0,0, 0.16) 0px 1px 4px',

    },
    media: {moblie:"768px", tab:"998px"},

  }
  return (
    <>
    <ThemeProvider theme={theme}>
     <Gobalstyle /> 
 <Header />

  <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="service" element={<Severice />}/>
        <Route path="contact" element={ <Contact/> } />
      </Routes>
<Footer />
</ThemeProvider>
    </>
  )
}

export default App
