import React, { useEffect } from 'react';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = "Micaela Pintos";
    const changeFavicon = (url) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = url; 
    };
    changeFavicon(`${process.env.PUBLIC_URL}/flower.png`);
  }, []);
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
