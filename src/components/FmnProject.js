import React from "react";
import pythonIcon from "../imgs/skills-icons/python-icon.svg";
import fmnGif from "../imgs/fmn-2.png";
import reactIcon from "../imgs/skills-icons/React-icon.svg";

import tailwindIcon from "../imgs/skills-icons/tailwind-icon.svg";

const FmnProject = () => {
  return (
    <div className="project-pane">
      <img src={fmnGif} alt="" className="project-img" />
      <div className="project-text">
        <div className="project-title">
          <h1>Forget-Me-Not </h1>
          <div className="project-icons">
            <a
              href="https://reactjs.org/"
              target="_blank"
              className="project-icon"
            >
              <img src={reactIcon} alt="react icon" />
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              className="project-icon"
            >
              <img src={pythonIcon} alt="python icon" />
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
          Flower Identification app made with React and Tailwind, leveraging
          self-built computer vision AI made with TensorFlow. Django backend
          allows users to log in and save results to their list.
        </p>
        <div className="project-links">
          <p>
            <a href="https://tombinnie.com/forget-me-not" target="_blank">
              Live Site
            </a>
          </p>
          <p>
            <a href="https://github.com/tomkotsu/forget-me-not" target="_blank">
              Source Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FmnProject;
