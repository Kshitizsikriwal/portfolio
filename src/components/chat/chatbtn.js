import React, { useState } from "react";
import chatlogo from "../../assets/images/chaticon.png";
// import { Button } from "react-bootstrap";

import "./chat.css";

const Chatinetface = () => {
  const [showchat, setShowchat] = useState(true);
  const [data, setData] = useState({ sendername: "", mail: "", message: "" });
  const handlechage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      {showchat ? (
        <div>
          <div className="chatform">
            <div className="chathead">
              {" "}
              <h3>Send Your message</h3>
              <button
                className="btnchatcross"
                onClick={() => setShowchat(!showchat)}
              >
                <h3>x</h3>
              </button>{" "}
            </div>

            <form action="" className="cont_form">
              <input
                type="text"
                placeholder="Name"
                name="sendername"
                onChange={handlechage}
                value={data.sendername}
              />
              <input
                type="email"
                placeholder="Email"
                name="mail"
                onChange={handlechage}
                value={data.mail}
              />
              <textarea
                rows={8}
                placeholder="Type yor message here ..."
                name="message"
                onChange={handlechage}
                value={data.message}
              ></textarea>
              <button onClick={handlesubmit}>Send</button>
            </form>
          </div>
        </div>
      ) : (
        <h1>.</h1>
      )}
      <button className="btnchat" onClick={() => setShowchat(!showchat)}>
        <>
          <img height={50} src={chatlogo} alt="chatlogo" />
        </>
      </button>
    </>
  );
};

export default Chatinetface;
