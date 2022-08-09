import React from "react";
import Switch from "./Switch";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <div className="navbar__wrapper">
        <div className="nav-left">
          <a href="#home">top</a>
          <a href="#about">about</a>
          <a href="#projects" className="nav-projects">
            projects
          </a>
          <a href="#contact">contact</a>
        </div>
        <Switch place="navSwitch"/>
      </div>
    </header>
  );
};

export default Navbar;
