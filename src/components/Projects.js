import React from "react";
import SoundscapeProject from "./SoundscapeProject";
import FmnProject from "./FmnProject";

const Projects = (props) => {
  return (
    <section className="projects" id="projects">
      <div className="projects__wrapper">
        <h1>projects</h1>
        <SoundscapeProject />
        <FmnProject />


      </div>
      <div className="spacer layer3"></div>
    </section>
  );
};

export default Projects;
