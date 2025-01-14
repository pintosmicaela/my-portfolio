import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import './IconBar.css';

const infoText = {
  en: {
      title: "Contact me",
      copy: "Copy",
      textCopied: "Copied!",
  },
  es: {
      title: "Contactame",
      copy: "Copiar",
      textCopied: "¡Copiado!",
  }
};

const IconBar = () => {
  const {language} = useLanguage();
  const textMail = infoText[language];
  const [isOpen, setIsOpen] = useState(false);
  const mail = "micaelalujanpintos@gmail.com";
  const [copied, setCopied] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mensaje temporal de copiado
    } catch (error) {
      console.error("Error al copiar texto:", error);
    }
  };

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
      <button className="mail-button" onClick={togglePanel}>
        <FaEnvelope className="icon" />
      </button>
      {isOpen && (
        <div className='email-modal'>
          <div className='email-panel'>
            <button onClick={togglePanel} className="close-email" aria-label="Cerrar panel">
              X
            </button>
            <h2>{textMail.title}</h2> 
            <div className="email-info">
              <strong className='text-mail'>micaelalujanpintos@gmail.com</strong>
              <button onClick={copyToClipboard} className='copy-button'> {textMail.copy} </button>
              {copied && <p className='text-copied'> {textMail.textCopied}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconBar;
