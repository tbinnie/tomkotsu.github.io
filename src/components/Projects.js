import React from "react";
import DarumaProject from "./DarumaProject";
import FmnProject from "./FmnProject";

const Projects = (props) => {
  return (
    <section className="projects" id="projects">
      <div className="projects__wrapper">
        <h1>projects</h1>
        <DarumaProject />
        <FmnProject />
      </div>
    </section>
  );
};

export default Projects;
