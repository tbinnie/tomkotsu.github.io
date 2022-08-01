import React from "react";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="name">
        <h1>
          <span className="yellow-text">Tom</span> Binnie
        </h1>
      </div>
      <div className="job-title">
        <h1 className="hero-title">
          Web<span className="yellow-text"> Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
