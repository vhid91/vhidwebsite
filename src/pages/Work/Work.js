import React, { Component } from "react";
import Experience from "../../components/Work/Experience";
import Projects from "../../components/Work/Project";
import "./style.scss";
import Home from "../../layout/Home/BaseLayout";

const Work = props => {
    return (
        <Home>
            <div className="work tableDiv">
                <div className="tableCellDiv">
                    <Experience />
                    <Projects />
                </div>
            </div>
        </Home>
    );
};

export default Work;
