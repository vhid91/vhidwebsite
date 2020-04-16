import React, { Component } from 'react'
import { projects } from './WorkData'
import { skillType } from '../../config';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            isPrevBtnVisible : false,
            isNextBtnVisible : true
        }
    }

    isNextBtnFun = (status) => {
        this.setState({
            isNextBtnVisible : status
        })
    }

    next = (status, scrollLeft, scrollLeftMax) => {
        this.setState({
            isPrevBtnVisible : status
        })

        scrollLeft > scrollLeftMax ? this.isNextBtnFun(false) : this.isNextBtnFun(true)
    }

    prev = (scrollVal) =>{
        var scrollLeft = document.getElementById("projects").scrollLeft += scrollVal;
        var scrollLeftMax = document.getElementById("projects").scrollLeftMax

        scrollLeft > 0 ? this.next(true, scrollLeft, scrollLeftMax) : this.next(false, scrollLeft, scrollLeftMax)
    }

    render() {
        const { isPrevBtnVisible, isNextBtnVisible } = this.state
        return (
            <div>
                <h2 class="subtitle">Projects</h2>
                <div className="projectList">
                    { isPrevBtnVisible ? (<button className="prevBtn" onClick={() => this.prev(-300)}>prev</button>) : null }
                    <div id="projects" className="projects">
                    
                        { projects.map((project)=>
                            <div
                                className="project"
                                key={project.name}
                            >
                                {project.img != "" ?
                                    <a href={project.img} target="_blank"><img src={project.img}/></a> :
                                    <div class="no-image-flex">
                                        <h1 class="text-has-shadows">
                                            {project.type}
                                        </h1>
                                    </div>
                                }
                                <p className="projectDesc">
                                    {project.name}
                                </p>
                            </div>
                        )}
                    
                    </div>
                    { isNextBtnVisible ? (<button className="nextBtn" onClick={() => this.prev(300)}>next</button>) : null }
                </div>
            </div>
        )
    }
}

export default Projects