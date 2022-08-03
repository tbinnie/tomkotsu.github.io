import React from "react";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1 className="name-title">
          <span className="yellow-text">Tom</span> Binnie
        </h1>
        <h1 className="job-title">
          Web<span className="yellow-text"> Developer</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
