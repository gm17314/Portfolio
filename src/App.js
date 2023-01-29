import './App.css';
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({duration: 950});
  }, [])

  return (
    <>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
