import React, { Component } from 'react'
import Experience from '../../components/Work/Experience'
import Projects from '../../components/Work/Project'
import './style.scss'

class Work extends Component {
    
    render(){
        return(
            <div className="work tableDiv">
                <div className="tableCellDiv">
                    <Experience/>
                    <Projects/>
                </div>
            </div>
        )
    }
}

export default Work