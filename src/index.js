import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header";
import Home from "./components/home/index.js";
import Skill from "./components/skills";
import Project from "./components/project";
import About from "./components/about";
// import Chatinetface from "./components/chat/chatbtn";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <div>
        <Navbar />
        <Home />
        <Skill />
        <Project />
        <About />
        {/* <Chatinetface /> */}
      </div>
    }
  </React.StrictMode>
);
