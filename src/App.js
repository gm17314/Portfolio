import "./App.css";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./component/Loading";

function App() {
  useEffect(() => {
    Aos.init({ duration: 950 });
  }, []);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
