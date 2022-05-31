import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./header.css";
const Navbar = () => {
  const [showham, setShowham] = useState(false);
  return (
    <>
      <nav className="main_nav">
        <div className={showham ? "menu_link_mobile" : "menu_link"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="signature">
          <h1>hello</h1>
        </div>
        {/* hamburger menu starts */}
        <div className="hamburger_menu">
          <div onClick={() => setShowham(!showham)}>
            <MenuRoundedIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;