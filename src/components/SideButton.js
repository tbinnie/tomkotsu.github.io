import React from "react";
import menuIcon from '../imgs/nav-icons/menu-icon.svg'

const SideButton = (props) => {
    return (
        <button className="side-btn"><img src={menuIcon} className="menu-icon" /> </button>
    )
}

export default SideButton;