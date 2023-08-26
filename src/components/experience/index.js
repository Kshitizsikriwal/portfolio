import React from "react";
import "./experience.css";
import experienceimage from "../../assets/images/experience.svg";
import exprincedata from "../../data/experiencedetail.json";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref: myRef, inView: isMyElementInView } = useInView();

  return (
    <>
      <div className="exp_main" id="experience" ref={myRef}>
        <div
          className={`exp_image ${
            isMyElementInView ? "i-am-visible" : "right-element"
          }`}
        >
          <h1>Experience</h1>
          <img src={experienceimage} alt=" Project" />
        </div>
        <div
          className={`ag-format-container ${
            isMyElementInView ? "i-am-visible" : "left-element"
          } `}
        >
          <div className="ag-courses_box">
            {exprincedata.experiencedetail.map((value, key) => {
              return (
                <div className="ag-courses_item" key={key}>
                  <a href="#experince" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">{value.heading}</div>
                    <div className="ag-courses-item_date-box">
                      {value.description}
                    </div>
                    <hr />
                    <div className="ag-courses-item_date-box">
                      <b>Duration:</b> {value.date}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
