import React from "react";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <a href="#home">Top</a>
            <a href="#about">About</a>
            <a href="#projects" className="yellow-text">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#home">Theme</a>
        </div>
    )
}

export default Navbar