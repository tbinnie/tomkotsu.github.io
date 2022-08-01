import React from "react";
import birds from "../imgs/birdsfromtree.png";

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
      <div className="image-holder">
        <img src={birds} className="boids"/>
      </div>
    </div>
  );
};

export default Hero;
