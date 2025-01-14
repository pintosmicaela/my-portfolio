import React, { useState } from 'react';
import { FaFileDownload  } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import { VscClose } from 'react-icons/vsc';

const url = {
  es: "https://drive.google.com/file/d/1uuMjK0yt7hgwBi3xYHpmVkYQWKMluRy7/view?usp=sharing",
  en: "https://drive.google.com/file/d/1uuMjK0yt7hgwBi3xYHpmVkYQWKMluRy7/view?usp=sharing",
}

const textAboutme = {
  en: {
    title: "About me",
    about: "I am an advanced Computer Engineering student at the National University of the South, Bahía Blanca, driven by a strong desire for continuous learning and ready to face any challenges that may arise along the way.",
    aboutplus: "I am committed to my professional and personal development, eager to contribute my knowledge and skills while acquiring new competencies in dynamic and challenging environments. I am an open-minded individual with a positive attitude and a willingness to collaborate and learn.",
    tools: "I possess effective communication skills, allowing me to express ideas clearly and connect with others. My approach to work is characterized by seriousness, organization, and commitment, always striving to fulfill my responsibilities efficiently. Additionally, I have a great passion for developing web applications that are both functional and visually appealing, reflecting my dedication to creating innovative and high-quality solutions.",
  },
  es: {
    title: "Sobre mí",
    about: "Soy estudiante avanzada de Ingeniería en Computación en la Universidad Nacional del Sur, Bahía Blanca, motivada por un fuerte deseo de aprendizaje continuo y preparada para enfrentar los desafíos que surjan en el camino.",
    aboutplus: "Estoy comprometida con mi desarrollo profesional y personal, dispuesta a aportar mis conocimientos y habilidades, al mismo tiempo que adquiero nuevas competencias en entornos dinámicos y desafiantes.",
    tools: "Soy una persona con una actitud abierta y una disposición siempre favorable para colaborar y aprender. Poseo habilidades de comunicación efectiva, lo que me permite expresar ideas de manera clara y conectarme con los demás. Mi enfoque hacia el trabajo se caracteriza por la seriedad, la organización y el compromiso, siempre buscando cumplir con mis responsabilidades de manera eficiente. Además, siento una gran pasión por el desarrollo de aplicaciones web que sean tanto funcionales como estéticamente atractivas, reflejando mi dedicación por crear soluciones innovadoras y de alta calidad.",
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