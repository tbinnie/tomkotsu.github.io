import React, { useState } from "react";

const Navbar = (props) => {

  return (
    <header className="navbar">
      <div className="navbar__wrapper">
        <a href="#home">Top</a>
        <a href="#about">About</a>
        <a href="#projects" className="yellow-text">
          Projects
        </a>
        <a href="#contact">Contact</a>
        <a href="#home">Theme</a>
      </div>
    </header>
  );
};

export default Navbar;
