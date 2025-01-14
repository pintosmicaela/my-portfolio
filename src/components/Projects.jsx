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
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/web/brownWeb.png", 
      more: "See more",
    },
    {
      name: "Image processing",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/photo/yellowPhoto.png", 
      more: "See more",
    },
    {
      name: "Endless runner",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/joystick/greenJoystick.png", 
      more: "See more",
    },
    {
      name: "Internship",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/web/whiteWeb.png", 
      more: "See more",
    },
    {
      name: "Application engineering",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/telephone/brownTelephone.png", 
      more: "See more",
    },
  ],
  es: [
    {
      name: "Portafolio",
      description: "Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.",
      link: "https://example.com",
      image: "/images/projects/web/greenWeb.png", 
      more: "Ver más",
    },
    {
      name: "Procesamiento de imagenes",
      description: "Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.Esta es la descripción en Español.",
      link: "https://example.com",
      image: "/images/projects/photo/whitePhoto.png", 
      more: "Ver más",
    },
    {
      name: "Endless runner",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/joystick/brownJoystick.png", 
      more: "See more",
    },
    {
      name: "Pasantía",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/web/yellowWeb.png", 
      more: "See more",
    },
    {
      name: "Ingeniería en Aplicaciones",
      description: "This is the description in English.This is the description in English.This is the description in English.This is the description in English.This is the description in English.",
      link: "https://example.com",
      image: "/images/projects/telephone/greenTelephone.png", 
      more: "See more",
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
