import React from "react";
import birds from "../imgs/birdsfromtree.png";

const Hero = (props) => {
  return (
    <div className="hero">
      <div>
        <h1>
          <span className="yellow-text">Tom</span> Binnie
        </h1>
      </div>
      <div>
        <h1 className="hero-title">
          Web<span className="yellow-text"> Developer</span>
        </h1>
      </div>
      <img src={birds} className="boids" alt="white tree with birds flying" />
    </div>
  );
};

export default Hero;
