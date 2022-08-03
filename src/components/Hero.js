import React from "react";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="name__wrapper">
          <h1 className="first-name yellow-text">tom</h1>
          <h1 className="last-name">binnie</h1>
        </div>
        <div className="title__wrapper">
          <h1 className="web-title">web </h1>
          <h1 className="dev-title yellow-text"> developer</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
