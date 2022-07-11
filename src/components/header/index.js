import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./header.css";
import { Button } from "react-bootstrap";
import resume from "../../assets/pdf/Divyanshu_verma.pdf";

const Navbar = () => {
  const [showham, setShowham] = useState(false);
  return (
    <>
      <nav className="main_nav">
        <div className={showham ? "menu_link_mobile" : "menu_link"}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            {/* <li>
              <a href="#">Experience</a>
            </li> */}
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="resume">
          <a href={resume} download={resume}>
            <Button variant="primary" className="resume-btn">
              resume
            </Button>
          </a>
          {/* <p>resume</p> */}
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
