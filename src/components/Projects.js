import React from "react";
import DarumaProject from "./DarumaProject";
import FmnProject from "./FmnProject";

const Projects = (props) => {
  return (
    <section className="projects" id="projects">
      <div className="projects__wrapper">
        <h1>projects</h1>
        <FmnProject />
        <DarumaProject />

      </div>
      <div className="spacer layer3"></div>
    </section>
  );
};

export default Projects;
