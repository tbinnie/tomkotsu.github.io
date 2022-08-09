import React, { useState, createContext } from "react";
import Hamburger from "./Hamburger";

import menuIcon from "../imgs/nav-icons/menu-icon.svg";
import closeIcon from "../imgs/nav-icons/close-icon.svg";

export const HbContext = createContext(null);

const HbLogic = () => {
  const [hbOpen, setHbOpen] = useState(false);

  return (
    <HbContext.Provider value={{ hbOpen, setHbOpen }}>
      <div>
        <button className="hb-btn" onClick={() => setHbOpen(!hbOpen)}>
          {hbOpen ? (
            <img src={closeIcon} className="close-icon" />
          ) : (
            <img src={menuIcon} className="menu-icon" />
          )}
        </button>
        <div>{hbOpen ? <Hamburger /> : null}</div>
      </div>
    </HbContext.Provider>
  );
};

export default HbLogic;
