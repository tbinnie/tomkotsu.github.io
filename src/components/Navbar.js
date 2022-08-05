import React from "react";
import Switch from "./Switch";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <div className="navbar__wrapper">
        <div className="nav-left">
          <a href="#home">Top</a>
          <a href="#about">About</a>
          <a href="#projects" className="nav-projects">
            Projects
          </a>
          <a href="#contact">Contact</a>
        </div>
        <Switch place="navSwitch"/>
      </div>
    </header>
  );
};

export default Navbar;
