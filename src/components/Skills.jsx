import React from 'react';
import {FaCss3, FaDatabase, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaUnity} from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import { BiLogoFirebase, BiLogoJava, BiLogoJquery, BiLogoTypescript } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import { HiCommandLine } from 'react-icons/hi2';

const textSkills = {
    en: {
        title: "Skills & Tools",
        description: "The skills, tools and technologies I use to bring products to life:",
    },
    es: {
        title: "Habilidades & Herramientas",
        description: "Las habilidades, herramientas y tecnologías que uso para dar vida a los productos: "
    }
};

const Skills = () => {
    const {language} = useLanguage();
    const textToShow = textSkills[language];

    const icons = [
        { id: 1,    icon: <FaJs />,         name: "JavaScript"},
        { id: 2,    icon: <FaNodeJs />,     name: "NodeJs"},
        { id: 3,    icon: <FaReact/>,       name: "React"},
        { id: 4,    icon: <BiLogoTypescript/>,name: "TypeScript"},
        { id: 5,    icon: <FaCss3 />,       name: "Css"},
        { id: 6,    icon: <FaHtml5 />,      name: "Html"},
        { id: 7,    icon: <FaPhp/>,         name: "PHP"},
        { id: 8,    icon: <FaUnity/>,       name: "Unity"},
        { id: 9,    icon: <BiLogoJava/>,    name: "Java"},
        { id: 10,   icon: <FaPython/>,      name: "Python"},
        { id: 11,   icon: <BiLogoJquery/>,  name: "JQuery"},
        { id: 12,   icon: <FaDatabase/>,    name: "SQL"},
        { id: 13,   icon: <FaGithub/>,      name: "GitHub"},
        { id: 14,   icon: <VscVscode/>,     name: "VS Code"},
        { id: 15,   icon: <BiLogoFirebase/>,name: "Firebase"},
        { id: 16,   icon: <HiCommandLine/>, name: "Command Line"},
        /* { id: 10,   icon: <SiOctave/>,      name: "Octave"}, */
        /* { id: 12,   icon: <FaCuttlefish/>,  name: "C"}, */
        /* { id: 16,   icon: <BiLogoGit/>,     name: "Git"}, */
        /* { id: 9,    icon: <SiGodotengine/>, name: "Godot"}, */
    ];

    return (
        <div className='skills'>
            <h2>{textToShow.title}</h2>
            <p>{textToShow.description}</p>
            <div className="icon-container">
                {icons.map(({id, icon, name}) => (
                    <div className="skill-icon" key={id}>
                        {icon}
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;