import React from 'react';

const url = "https://drive.google.com/file/d/1uuMjK0yt7hgwBi3xYHpmVkYQWKMluRy7/view?usp=sharing";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante avanzada de Ingeniería en Computación en la Universidad Nacional del Sur, Bahía Blanca. Me encuentro en búsqueda de mi primera experiencia laboral, motivada por un fuerte deseo de aprendizaje continuo y dispuesta a enfrentar los desafíos que puedan surgir en el camino.
      </p>
      <p>
        Estoy comprometida con el desarrollo profesional y personal, lista para aportar mis conocimientos y habilidades, mientras adquiero nuevas competencias en un entorno dinámico y desafiante.
      </p>
      <p>
        Soy una desarrolladora con experiencia en <strong>React</strong>, <strong>Node.js</strong> y otras tecnologías modernas. Me encanta crear aplicaciones web
        eficientes y hermosas.
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer" className='cta'>Curriculum Vitae</a>
    </section>
  );
};

export default About;
