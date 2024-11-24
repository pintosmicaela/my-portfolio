import React from 'react';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'Mi portfolio personal hecho con React.',
    link: 'https://github.com/tu-usuario/portfolio',
  },
  {
    name: 'Proyecto Final de Procesamiento de Imágenes',
    description: 'Tienda online con carrito de compras y autenticación.',
    link: 'https://github.com/tu-usuario/ecommerce',
  },
  {
    name: 'Pasantía',
    description: 'Página web de uso interno para gestión de llamadas.',
  },
  {
    name: 'Endless Runner',
    description: 'Presentación para ser ayudante de cátedra en la Universidad Provincial del Sudoeste.',
    link: 'https://github.com/tu-usuario/ecommerce',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
