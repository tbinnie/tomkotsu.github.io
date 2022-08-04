import React, { useState } from "react";
import Hamburger from "./Hamburger";

import menuIcon from "../imgs/nav-icons/menu-icon.svg";
import closeIcon from "../imgs/nav-icons/close-icon.svg";

const HbLogic = () => {

  const [hbOpen, setHbOpen] = useState(false);

  return (
    <div>
      <button className="hb-btn" onClick={() => setHbOpen(!hbOpen)}>
        {hbOpen? <img src={closeIcon} className="close-icon" />:<img src={menuIcon} className="menu-icon" />}
      </button>
      <div>
        {hbOpen?<Hamburger />:null}
      </div>
    </div>
  );
};

export default HbLogic;
