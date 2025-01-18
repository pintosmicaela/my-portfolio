import React from 'react';
import TypingText from './../TypingText';
import { useLanguage } from './../LanguageContext';

const textHero = {
  en: {
    minitext: " Full Stack Developer | Passionate about building impactful solutions",
  },
  es: {
    minitext: " Desarrolladora Full Stack | Apasionada por construir soluciones impactantes",
  }
}

const Hero = () => {
  const {language} = useLanguage();
  const textToShow = textHero[language];
  return (
    <div className="hero">
      <div className="hero-blur">
        <h1><span className="highlight">Micaela Luján Pintos</span></h1>
        <TypingText text={textToShow.minitext} speed={30} />
      </div>
    </div>
  );
};

export default Hero;