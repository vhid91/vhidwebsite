import React, { Component } from "react";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import { frontEndSkill, backEndSkill, otherSkill, aboutMe } from "./AboutData";
import Home from "../../layout/Home/BaseLayout";

const About = () => {
    return (
        <Home>
            <div className="about">
                <div className="tableDiv">
                    <div className="tableCellDiv">
                        <div className="aboutMe">
                            <h1>About</h1>
                            <p>{aboutMe}</p>
                        </div>

                        <div className="flexKoLang">
                            <div className="meDotJSON">
                                <span className="curlyBrace">&#123;</span>
                                <br />
                                <br />
                                <div className="marginLeft">
                                    <span className="aboutNodeTitle">"aboutMe"</span> : &#123;
                                    <br />
                                    <br />
                                    <div className="marginLeft">
                                        "name" : <span className="myName">"David Abaiz"</span>,
                                        <br />
                                        <br />
                                        "gender" : "male",
                                        <br />
                                        <br />
                                        "age" : 2x,
                                        <br />
                                        <br />
                                        "educational" : <span className="education">"BSIT"</span>,
                                        <br />
                                        <br />
                                        <span className="position">
                                            "currentPosition" : "Software Engineer"
                                        </span>
                                    </div>
                                    &#125;
                                    <br />
                                </div>
                                <span className="curlyBrace">&#125;</span>
                            </div>
                            <div className="skills">
                                <h2>Knowledge in the ff:</h2>
                                <hr />
                                <div className="end">
                                    <div>
                                        <h3>Frontend</h3>
                                        <ul>
                                            {frontEndSkill.map((data) => (
                                                <li key={data.id}>{data.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Backend</h3>
                                        <ul>
                                            {backEndSkill.map((data) => (
                                                <li key={data.id}>{data.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Other</h3>
                                        <ul>
                                            {otherSkill.map((data) => (
                                                <li key={data.id}>{data.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Home>
    );
};

export default About;
