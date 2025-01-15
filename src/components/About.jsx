import React, { useState } from 'react';
import { FaFileDownload  } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import { VscClose } from 'react-icons/vsc';

const url = {
  es: "https://drive.google.com/file/d/1-PlRDtJDhHGyuFrJYTV6c4eOlnFSDyPH/view?usp=sharing",
  en: "https://drive.google.com/file/d/1-S9Etaw-_7pFFbOdJaKiQSpDod0KSQGb/view?usp=sharing",
}

const textAboutme = {
  en: {
    title: "About me",
    about: "I am an advanced Computer Engineering student at the National University of the South (UNS, Bahía Blanca) motivated by continuous learning and prepared for new challenges that arise along the way.",
    aboutplus: "I am committed to my professional and personal growth, prepared to contribute my knowledge and skills while acquiring new tools.",
    tools: "I have a positive attitude and I am always willing to collaborate and learn. I also have strong communication skills, which allow me to express ideas clearly and connect with others. I strive to fulfill my responsibilities efficiently through organization, commitment, and a serious approach to work.",
  },
  es: {
    title: "Sobre mí",
    about: "Soy estudiante avanzada de Ingeniería en Computación en la Universidad Nacional del Sur (UNS, Bahía Blanca) motivada por el aprendizaje continuo y preparada para enfrentar los desafíos que surjan en el camino.",
    aboutplus: "Estoy comprometida con mi desarrollo profesional y personal, dispuesta a aportar mis conocimientos y habilidades, al mismo tiempo que adquiero nuevas herramientas.",
    tools: "Soy una persona con una actitud positiva, siempre dispuesta a colaborar y aprender. Además, cuento con habilidades de comunicación efectivas, lo que me permite expresar ideas de manera clara y conectar con los demás. Me esfuerzo por cumplir con mis responsabilidades de manera eficiente por medio de la organización, compromiso y la seriedad para el trabajo.",
  },
}

const About = () => {
  const {language} = useLanguage();
  const textToShow = textAboutme[language];
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="about" className="about">
      <div className="content">
        <div className="text-cv">
            <h2>{textToShow.title}</h2>
          <div className="text">
            <p>{textToShow.about}</p>
            <p>{textToShow.aboutplus}</p>
            <p>{textToShow.tools}</p>
          </div>
          <div className="cv">
            <button onClick={togglePanel} className="cv-button">
              Curriculum Vitae
            </button>
            {isOpen && (
              <div className='cv-modal'>
                <div className='cv-panel'>
                  <button onClick={togglePanel} className="close-panel" aria-label="Cerrar panel">
                    <VscClose className='icon'/>
                  </button>
                  <h2>Curriculum Vitae</h2> 
                  <div className="cv-buttons">
                    <a href={url.es} className="button-panel" target="_blank" rel="noopener noreferrer">
                      <FaFileDownload  className="icon-cv" />Español
                    </a>
                    <a href={url.en} className="button-panel" target="_blank" rel="noopener noreferrer">
                      <FaFileDownload  className="icon-cv" />English
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='myphoto'>
          <img src="/images/me/fotoamarilla.png" alt="Descripcion" />
      </div>
    </div>
  </section>
  );
};

export default About;