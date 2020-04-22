import React, { useState } from "react";
import { projects } from "./WorkData";

const Projects = props => {
    const [isPrevBtnVisible, setIsPrevBtnVisible] = useState(false);
    const [isNextBtnVisible, setIsNextBtnVisible] = useState(true);
    const [x, setX] = useState(1)

    const prev = () => {  
        console.log(x)
        if(x < 2) {
            setX(x-1)
            setIsPrevBtnVisible(false)
            return
        }
        setIsNextBtnVisible(true)
        setX(x-1)
    }

    const next = () => {
        console.log(x)
        if(x >= (((projects.length / 2 | 0) - 1))) {
            setX(x+1)
            setIsNextBtnVisible(false)
            return
        }
        setIsPrevBtnVisible(true)
        setX(x+1)
    };

    return (
        <>
            <h2 className="subtitle">Projects</h2>
            <div className="projectList">
                {isPrevBtnVisible ? (
                    <button className="prevBtn" onClick={() => prev()}>
                        prev
                    </button>
                ) : null}
                <div id="projects" className="projects">
                    {projects.slice((0+x),(4+x)).map((project) => (
                        <div className="project" key={project.name}>
                            {project.img != "" ? (
                                <a href={project.img} target="_blank">
                                    <img src={project.img} />
                                </a>
                            ) : (
                                    <div className="no-image-flex">
                                        <h1 className="text-has-shadows">{project.type}</h1>
                                    </div>
                                )}
                            <p className="projectDesc">{project.name}</p>
                        </div>
                    ))}
                </div>
                {isNextBtnVisible ? (
                    <button className="nextBtn" onClick={() => next()}>
                        next
                    </button>
                ) : null }
            </div>
        </>
    );
};

export default Projects;
