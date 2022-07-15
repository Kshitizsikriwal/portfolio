import React from "react";
import "./about.css";

import aboutsec from "../../data/aboutme.json";
const About = () => {
  return (
    <div className="main_about_body" id="about">
      <div className="about_text">
        {aboutsec.aboutme.map((detail) => (
          <>
            <h1>About me</h1>
            <p>{detail.line}</p>
          </>
        ))}
      </div>
      <div className="about_img">

      </div>
    </div>
  );
};

export default About;
