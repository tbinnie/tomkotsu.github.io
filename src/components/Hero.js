import React from "react";
import Switch from "./Switch";

const Hero = (props) => {
  return (
    <section className="hero" id="home">
      <Switch place="mb-hero-switch" />
      <div className="hero__wrapper">
        <div className="name__wrapper">
          <h1 className="first-name">tom</h1>
          <h1 className="last-name">binnie</h1>
        </div>
        <div className="title__wrapper">
          <h1 className="web-title">web </h1>
          <h1 className="dev-title"> developer</h1>
        </div>
      </div>
      <div className="spacer layer1"></div>
    </section>
  );
};

export default Hero;
