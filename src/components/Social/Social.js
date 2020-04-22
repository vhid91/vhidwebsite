import React, { useRef } from "react";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import "font-awesome/css/font-awesome.min.css";
import { socialBtn } from "./ButtonData";

const Social = props => {
    const myElements = useRef([]);

    return (
        <div className="social">
            <ul>
                {socialBtn.map((element, index) => (
                    <li key={element.href} ref={myElements[index]}>
                        <Tilt tiltEnable={false} scale={1.1}>
                            <a href={element.href}>
                                <i className={element.faName}></i>
                            </a>
                        </Tilt>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
