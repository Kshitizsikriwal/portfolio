import React from "react";
import "../home/home.css";
import TypingEffet from "../common/typewriter.js";
import linkedin_icon from "../../assets/images/linkedin.png";
import github_icon from "../../assets/images/github.png";
import mail_icon from "../../assets/images/gmail.png";
import dp from "../../assets/images/profilepic.jpg";

const Home = () => {
  return (
    <>
      <div className="main_body">
        <div className="greeting_name">
          <h1>
            Hi, I'm <br />
            Divyanshu Verma
          </h1>
          <p>
            <TypingEffet />
          </p>
          <div className="contact_icons">
            <img src={linkedin_icon} alt="linked" />
            <img src={github_icon} alt="github" />
            <img src={mail_icon} alt="mail" />
          </div>
        </div>
        <div className="profile_image">
            <img src={dp} alt="dibu" />
        </div>
      </div>
    </>
  );
};

export default Home;
