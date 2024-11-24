import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import './IconBar.css'; // Archivo CSS para los estilos

const IconBar = () => {
  return (
    <div className="icon-bar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href="https://github.com/pintosmicaela" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/in/mlpintos" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
};

export default IconBar;
