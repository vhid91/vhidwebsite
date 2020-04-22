import React, { useState } from "react";
import "./style.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../../config";
import Home from "../../layout/Home/BaseLayout"

const Contact = (props) => {
  const [submitBtnOn, setSubmitBtnOn] = useState(false);
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const resetFields = () => {
    setSubmitBtnOn(false);
    setEmail("");
    setContent("");
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (email && content !== null) {
      const msg = {
        email,
        content,
      };

      resetFields();
    } else {
      alert("Please don't leave blank.");
    }
  };

  const notRobot = () => {
    setSubmitBtnOn(true);
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Home>
      <div className="contact tableDiv">
        <div className="tableCellDiv">
          <div className="messageMe">
            <h2>Contact Me {process.env.GOOGLE_RECAPTCHA_SITEKEY}</h2>
            <input
              className="input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={inputEmail}
            />
            <br />
            <textarea
              className="input"
              placeholder="Your message"
              value={content}
              onChange={inputContent}
            ></textarea>
            <br />
            {submitBtnOn ? (
              <button onClick={submitMessage}>Submit</button>
            ) : (
                <ReCAPTCHA
                  sitekey={config.GOOGLE_RECAPTCHA_SITEKEY}
                  onChange={notRobot}
                />
              )}
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Contact;
