import React from "react";
import sunIcon from "../imgs/nav-icons/sun-icon.svg";
import moonIcon from "../imgs/nav-icons/moon-icon.svg";
import { ThemeContext } from "../App";

function Switch(props) {
  const { place } = props;
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <label className="switch" id={place}>
      <input type="checkbox" onChange={toggleTheme} checked="" />
      <div className="slider">
        <span className="switch-left">
          <img src={sunIcon} className="sun-icon" />
        </span>
        <span className="switch-right">
          <img src={moonIcon} className="moon-icon" />
        </span>
      </div>
    </label>
  );
}

export default Switch;
