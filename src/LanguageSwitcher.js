import React from "react";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import './IconBar.css';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="icon-lang">
      <FaGlobe/>
    </button>
  );
};

export default LanguageSwitcher;