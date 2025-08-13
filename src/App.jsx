import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Works from './pages/Works.jsx'


function Car(props){
  return <h2> dont be racist I am a {props.colour} QYAR, my brand is {props.brand}</h2>
}

function App() {
  
  return (
    <div> 
    <Navbar/>
    <Landing/>
    <About/>
    <Works/>
    <Contact/>
    <Footer/>
   

    </div>
    
  );
}

export default App
