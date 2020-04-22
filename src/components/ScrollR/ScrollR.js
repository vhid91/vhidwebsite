import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { withRouter } from "react-router-dom";
import _ from "lodash";

const ScrollR = props => {
    const { location, history } = props;
    const currentLocation = location.pathname;
    
    useEffect(() => {
        debounce()
        return ()=> window.removeEventListener('wheel', handleScroll);
    });
    
    const debounce = _.debounce(()=> window.addEventListener("wheel", handleScroll), 1500)
    
    const handleScroll = e => {
        historyFun(currentLocation, e.deltaY < 0 ? false : true, history);
    };

    const historyFun = (currentLocation, scroll, history) => {
        
        if (currentLocation === "/" && scroll) history.push("/about");
        if (currentLocation === "/about" && !scroll) history.push("/");
        if (currentLocation === "/about" && scroll) history.push("/work");
        if (currentLocation === "/work" && !scroll) history.push("/about");
        if (currentLocation === "/work" && scroll) history.push("/contact");
        if (currentLocation === "/contact" && !scroll) history.push("/work");
    };

    const isUp = () => {
        historyFun(location.pathname, false, history);
    };
    const isDown = () => {
        historyFun(location.pathname, true, history);
    };

    

    return (
        <div className="ScrollR">
            {currentLocation === "/" ? (
                ""
            ) : (
                <a onClick={isUp}>
                    <i className="fa fa-angle-up"></i>
                </a>
            )}
            <br />
            <span>Scroll</span>
            <br />
            {currentLocation !== "/contact" ? (
                <a onClick={isDown}>
                    <i className="fa fa-angle-down"></i>
                </a>
            ) : (
                <span style={{ opacity: 0 }}>
                    <i className="fa fa-angle-down"></i>
                </span>
            )}
        </div>
    );
};

export default withRouter(ScrollR);
