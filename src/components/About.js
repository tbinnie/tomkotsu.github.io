import React from "react";
import reactIcon from '../imgs/skills-icons/React-icon.svg'
import jsIcon from '../imgs/skills-icons/js-icon.svg'
import htmlIcon from '../imgs/skills-icons/html-icon.svg'
import cssIcon from '../imgs/skills-icons/css-icon.svg'
import sassIcon from '../imgs/skills-icons/sass-icon.svg'
import webpackIcon from '../imgs/skills-icons/webpack-icon.svg'
import sqlIcon from '../imgs/skills-icons/sql-icon.svg'
import djangoIcon from '../imgs/skills-icons/django-icon.svg'
import npmIcon from '../imgs/skills-icons/npm-icon.svg'
import vscodeIcon from '../imgs/skills-icons/vscode-icon.svg'
import pythonIcon from '../imgs/skills-icons/python-icon.svg'
import gitIcon from '../imgs/skills-icons/git-icon.svg'
const About = (props) => {
  return (
    <div className="about" id="about">
      <h1>Hi.</h1>
      <p className="info">I'm a web developer using React, HTML and CSS to build dynamic, responsive sites that serve a purpose. I have experience with
      Python and SQL through Data Science work, and a passion for making useful stuff.
      </p>
      <h1>Skills</h1>
      <div className="skill-list">
        <div className="skill-box"><img src={reactIcon} alt="react icon"/></div>
        <div className="skill-box"><img src={jsIcon} alt="js icon"/></div>
        <div className="skill-box"><img src={htmlIcon} alt="html icon"/></div>
        <div className="skill-box"><img src={cssIcon} alt="css icon"/></div>
        <div className="skill-box"><img src={sassIcon} alt="sass icon"/></div>
        <div className="skill-box"><img src={webpackIcon} alt="webpack icon"/></div>
        <div className="skill-box"><img src={pythonIcon} alt="python icon"/></div>
        <div className="skill-box"><img src={sqlIcon} alt="sql icon"/></div>
        <div className="skill-box"><img src={djangoIcon} alt="django icon"/></div>
        <div className="skill-box"><img src={npmIcon} alt="npm icon"/></div>
        <div className="skill-box"><img src={vscodeIcon} alt="vscode icon"/></div>
        <div className="skill-box"><img src={gitIcon} alt="git icon"/></div>
      </div>
    </div>
  );
};

export default About;
