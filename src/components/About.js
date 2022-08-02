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
      <hr></hr>
      <h1>Skills</h1>
      <div className="skill-list">
        <div className="skill-box"><a href="https://reactjs.org/" target="_blank"><img src={reactIcon} alt="react icon" /></a></div>
        <div className="skill-box"><a href="https://www.javascript.com/" target="_blank"><img src={jsIcon} alt="js icon"/></a></div>
        <div className="skill-box"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src={htmlIcon} alt="html icon"/></a></div>
        <div className="skill-box"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src={cssIcon} alt="css icon"/></a></div>
        <div className="skill-box"><a href="https://sass-lang.com/" target="_blank"><img src={sassIcon} alt="sass icon"/></a></div>
        <div className="skill-box"><a href="https://webpack.js.org/" target="_blank"><img src={webpackIcon} alt="webpack icon"/></a></div>
        <div className="skill-box"><a href="https://www.python.org/" target="_blank"><img src={pythonIcon} alt="python icon"/></a></div>
        <div className="skill-box"><a href="https://www.postgresql.org/" target="_blank"><img src={sqlIcon} alt="sql icon"/></a></div>
        <div className="skill-box"><a href="https://www.djangoproject.com/" target="_blank"><img src={djangoIcon} alt="django icon"/></a></div>
        <div className="skill-box"><a href="https://www.npmjs.com/" target="_blank"><img src={npmIcon} alt="npm icon"/></a></div>
        <div className="skill-box"><a href="https://code.visualstudio.com/" target="_blank"><img src={vscodeIcon} alt="vscode icon"/></a></div>
        <div className="skill-box"><a href="https://git-scm.com/" target="_blank"><img src={gitIcon} alt="git icon"/></a></div>
      </div>
    </div>
  );
};

export default About;
