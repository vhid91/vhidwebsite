import React, { Component, useState, useEffect, useRef } from "react";
import "./style.scss";
import { TweenMax } from "gsap";
import { Transition } from "react-transition-group";

const Explore = props => {
    const exploreElement = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(!show);
    }, []);

    return (
        <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={show}
            addEndListener={(node, done) => {
                TweenMax.to(node, 0.5, {
                    x: show ? 0 : 100,
                    autoAlpha: show ? 1 : 0,
                    onComplete: done,
                });
            }}
        >
            <div className="explore" ref={exploreElement}>
                <ul>
                    <li>Blog</li>
                    <li>Services</li>
                    <li>Games</li>
                    <li>Anything Goes</li>
                </ul>
                <h1>UNDER CONSTRUCTION</h1>
            </div>
        </Transition>
    );
};

export default Explore;
