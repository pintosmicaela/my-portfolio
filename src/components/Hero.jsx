import React from 'react';
import TypingText from '../TypingText';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Hola, soy <span className="highlight" style={{ fontFamily: "'Caveat', sans-serif" }}>Micaela Pintos</span></h1>
      <TypingText text= " Desarrolladora Full Stack | Apasionada por construir soluciones impactantes. " speed={30}/>
      <a href="#projects" className="cta">Ver mis proyectos</a>
    </div>
  );
};

export default Hero;
