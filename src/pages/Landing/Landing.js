import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Tilt from "react-parallax-tilt";
import "font-awesome/css/font-awesome.min.css";
import { TweenMax, Power3 } from "gsap";
import Social from "../../components/Social/Social";
import Explore from "../../components/Explore/Explore";
import Home from "../../layout/Home/BaseLayout";

const publicFolder = process.env.PUBLIC_URL;

const tagline = "{ David Abaiz online portfolio. }";

const Landing = (props) => {
    const titleElement = useRef(null);
    const subTitleElement = useRef(null);
    const [isExploring, setIsExploring] = useState(false);

    useEffect(() => {
        TweenMax.to(titleElement.current, 1, {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
        });
        TweenMax.to(subTitleElement.current, 2, {
            opacity: 1,
            ease: Power3.easeOut,
            delay: 0.5,
        });
    }, []);

    const explore = () => {
        setIsExploring(!isExploring);
    };

    return (
        <Home>
            <div className="landing">
                {isExploring ? <Explore /> : ""}
                <div className="exploreBtn" onClick={explore}>
                    <i className={isExploring ? "fa fa-window-close" : "fa fa-bars"}></i>{" "}
                    {isExploring ? "CLOSE" : "EXPLORE"}
                </div>
                <Tilt trackOnWindow={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <div className="tableDiv">
                        <div className="tableCellDiv">
                            <div className="title" ref={titleElement}>
                                <img src={`${publicFolder}/logo.png`} width="75%" />
                            </div>
                            <center ref={subTitleElement}>
                                <div className="subtitle">{tagline}</div>
                                <Social />
                            </center>
                        </div>
                    </div>
                </Tilt>
            </div>
        </Home>
    );
};

export default Landing;
