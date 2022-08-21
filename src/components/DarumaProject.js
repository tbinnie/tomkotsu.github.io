import React from "react";
import darumaGif from "../imgs/daruma-gif.gif";
import reactIcon from "../imgs/skills-icons/React-icon.svg";
import jsIcon from "../imgs/skills-icons/js-icon.svg";
import tailwindIcon from "../imgs/skills-icons/tailwind-icon.svg";

const DarumaProject = () => {
  return (
    <div className="project-pane">
      <img src={darumaGif} alt="" className="project-img" />
      <div className="project-text">
        <div className="project-title">
          <h1>Daruma Ramen </h1>
          <div className="project-icons">
            <a
              href="https://reactjs.org/"
              target="_blank"
              className="project-icon"
            >
              <img src={reactIcon} alt="react icon" />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              className="project-icon"
            >
              <img src={jsIcon} alt="js icon" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="project-icon"
            >
              <img src={tailwindIcon} alt="tailwind icon" />
            </a>
          </div>
        </div>
        <p>
          Mobile-first responsive restaurant site built with React and Tailwind.
          Designed with interactive features leveraging hooks, Context API
          and JavaScript.
        </p>
        <div className="project-links">
          <p>
            <a href="https://tombinnie.com/ramen-restaurant" target="_blank">
              Live Site
            </a>
          </p>
          <p>
            <a
              href="https://github.com/tomkotsu/ramen-restaurant"
              target="_blank"
            >
              Source Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarumaProject;
