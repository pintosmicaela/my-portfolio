import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './IconBar.css'; // Archivo CSS para los estilos

const IconBar = () => {
  return (
    <div className="icon-bar">
      <a 
        href="https://linkedin.com/in/mlpintos" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="icon" />
      </a>
      <a 
        href="https://github.com/pintosmicaela" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="icon" />
      </a>
      <a 
        href="mailto:micaelalujanpintos@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Correo Electrónico"
      >
        <FaEnvelope className="icon" />
      </a>
    </div>
  );
};

export default IconBar;
