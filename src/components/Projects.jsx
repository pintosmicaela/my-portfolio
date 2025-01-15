import React from 'react';
import { useLanguage } from '../LanguageContext';

const projectsName = {
  en: {title: "Projects"},
  es: {title: "Proyectos"}
}

const projectsData = {
  en: [
    {
      name: "Portfolio",
      description: "This portfolio is built with JavaScript, with React for the frontend and Node.js for the backend.",
      link: "https://github.com/pintosmicaela/my-portfolio",
      image: "/images/projects/web/brownWeb.png", 
      more: "See more",
    },
    {
      name: "Image processing",
      description: "Final Project: The objectives are to detect the horizon line, rotate the image to align with it, and identify different types of cookies within the image. Made with Octave.",
      link: "https://github.com/pintosmicaela/img-processing-final",
      image: "/images/projects/photo/yellowPhoto.png", 
      more: "See more",
    },
    {
      name: "Endless runner",
      description: "A short and simple game designed to demonstrate the essential features of an Endless Runner. Developed with Unity.",
      link: "https://github.com/pintosmicaela/endless-runner-to-explain",
      image: "/images/projects/joystick/greenJoystick.png", 
      more: "See more",
    },
    {
      name: "Internship",
      description: "Development of an internal web application for class management, built with JavaScript, Bootstrap for the frontend, and Node.js for the backend.",
      link: "",
      image: "/images/projects/web/whiteWeb.png", 
      more: "",
    },
    {
      name: "Application engineering",
      description: "Final Project: A graphic novel game designed for mobile devices, developed with Unity and utilizing design patterns.",
      link: "https://github.com/pintosmicaela/iap-final",
      image: "/images/projects/telephone/brownTelephone.png", 
      more: "See more",
    },
  ],
  es: [
    {
      name: "Portafolio",
      description: "Este portafolio es desarrollado usando JavaScript, con React para el frontend y Node.js para el backend.",
      link: "https://github.com/pintosmicaela/my-portfolio",
      image: "/images/projects/web/greenWeb.png", 
      more: "Ver más",
    },
    {
      name: "Procesamiento de imagenes",
      description: "Proyecto Final: Los objetivos son detectar la línea del horizonte y rotarla con respecto a dicha línea e identificar diferentes tipos de galletitas.",
      link: "https://github.com/pintosmicaela/img-processing-final",
      image: "/images/projects/photo/whitePhoto.png", 
      more: "Ver más",
    },
    {
      name: "Endless runner",
      description: "Un juego breve y sencillo, diseñado para explicar las características esenciales de un Endless Runner. Desarrollado en Unity.",
      link: "https://github.com/pintosmicaela/endless-runner-to-explain",
      image: "/images/projects/joystick/brownJoystick.png", 
      more: "Ver más",
    },
    {
      name: "Pasantía",
      description: "Desarrollo de una aplicación web interna para la gestión de clases, utilizando JavaScript. Se empleó Bootstrap para el frontend y Node.js para el backend.",
      link: "",
      image: "/images/projects/web/yellowWeb.png", 
      more: "",
    },
    {
      name: "Ingeniería en Aplicaciones",
      description: "Proyecto Final: Un juego de género novela gráfica diseñado para dispositivos móviles, desarrollado con Unity e implementando patrones de diseño.",
      link: "https://github.com/pintosmicaela/iap-final",
      image: "/images/projects/telephone/greenTelephone.png", 
      more: "Ver más",
    },
  ],
};
    
const Projects = () => {
  const { language } = useLanguage(); 
  const projects = projectsData[language];
  const nameProjects = projectsName[language];
  return (
    <section id="projects" className="projects">
      <h2>{nameProjects.title}</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <img src={project.image} alt="" className="project-item-image"/>
                <div className="project-item-content">
                  <div className="project-item-name">{project.name}</div>
                  <p className="project-item-description">{project.description}</p>
                  <div className="project-item-action">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.more}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };

export default Projects;
