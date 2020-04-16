import React, { Component } from 'react'
import './style.scss'
import ReCAPTCHA from "react-google-recaptcha";
import {config} from "../../config"

class Contact extends Component {

    constructor(props){
      super(props);
      this.state = {
          submitBtnOn : false,
          email : "",
          content : ""
      }
    }

    resetFields(){
      this.setState({
        submitBtnOn : false,
        email : "",
        content : ""
      })
    }

    submitMessage = (e) => {
      const { email, content } = this.state
      e.preventDefault()
      if(email && content !== null) {
        const msg = {
          email,
          content
        }

        this.resetFields()
      }else{
        alert("Please don't leave blank.")
      }
      
    }

    notRobot = () => {
      this.setState({
          submitBtnOn : true
      })
    }

    inputEmail = (e) => {
      this.setState({
        email : e.target.value
      })
    }

    inputContent = (e) => {
      this.setState({
        content : e.target.value
      })
    }

    render(){
      const { submitBtnOn, email, content } = this.state
      return (
        <div className="contact tableDiv">
          <div className="tableCellDiv">
            <div className="messageMe">
      <h2>Contact Me {process.env.GOOGLE_RECAPTCHA_SITEKEY}</h2>
              <input
                className="input"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={this.inputEmail}
              />
              <br />
              <textarea
                className="input"
                placeholder="Your message"
                value={content}
                onChange={this.inputContent}
              ></textarea>
              <br />
              {submitBtnOn ? (
                <button onClick={this.submitMessage}>Submit</button>
              ) : (
                <ReCAPTCHA
                  sitekey={config.GOOGLE_RECAPTCHA_SITEKEY}
                  onChange={this.notRobot}
                />
              )}
            </div>
          </div>
        </div>
      );
    }
}

export default Contact