import React from "react";

const Hero = (props) => {
  return (
    <section className="hero" id="home">
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
    </section>
  );
};

export default Hero;
