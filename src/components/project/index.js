import React from "react";
import "./project.css";
import projdata from "../../data/projectdetail.json";
import { Button } from "react-bootstrap";
import { RiGitRepositoryLine } from "@react-icons/all-files/ri/RiGitRepositoryLine";

const Project = () => {
  return (
    <>
      <div className="project_main" id="project">
        <div className="project_desc">
          {projdata.projectdetail.map((detail) => (
            <>
              <a href={detail.githublink}>
                <div className="master-card">
                  <div className="proj_head">
                    <p>
                      <RiGitRepositoryLine />
                      <span> </span>
                      {detail.heading}
                    </p>
                  </div>
                  <div className="proj_desc">
                    <p>{detail.description}</p>
                  </div>
                  <div className="proj_buttons">
                    <a href={detail.liveprojectlink}>
                      <Button variant="primary">View project</Button>
                    </a>
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
        <div className="projectimage">
          <h1>Project</h1>
          <img
            src="http://abhishek-rao-portfolio.herokuapp.com/_next/image?url=%2Fprojects.svg&w=1200&q=75"
            alt=" Project"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
