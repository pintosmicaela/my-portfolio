import React from 'react';
import TypingText from '../TypingText';
import { useLanguage } from '../LanguageContext';

const textHero = {
  en: {
    welcome: "Hello, I'm ",
    name: "Micaela Pintos",
    minitext: " Full Stack Developer | Passionate about building impactful solutions",
  },
  es: {
    welcome: "Hola, soy ",
    name: "Micaela Pintos",
    minitext: " Desarrolladora Full Stack | Apasionada por construir soluciones impactantes",
  }
}

const Hero = () => {
  const {language} = useLanguage();
  const textToShow = textHero[language];
  return (
    <div className="hero">
      <div className="hero-blur">
        <h1><span className="highlight">{textToShow.name}</span></h1>
        <TypingText text={textToShow.minitext} speed={30} />
      </div>
    </div>
  );
};

export default Hero;
