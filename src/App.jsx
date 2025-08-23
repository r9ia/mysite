import './App.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Works from './pages/Works.jsx'

function App() {
  
  return (
    <> 
    <Navbar/>
    <Landing/>
    <About/>
    <Works/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
