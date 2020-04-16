import React, { Component } from 'react'
import {timeLine} from './WorkData'

class Experience extends Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        
        this.random = Math.floor(Math.random() * 99);
    }
    isEven(i){
        if(i === ( i & 2 )) return { opacity : 0 }
    }
    isOdd(i){
        if(i !== (i&2)) return { opacity : 0 }
    }
    
    render(){
        return(
            <div className="">
                <h1 className="has-text-border">Experience</h1>
                <div className="timeLine flexThis">
                    {timeLine.map((data) => <div
                        className="card"
                        key={data.year}
                    >
                        <div className="flexThis">
                            {data.details.map((detail, index)=>
                                <div
                                    style={this.isOdd(index)}
                                    className="timeLineDetailsContainer"
                                    key={detail.month}
                                >
                                    <h5>{detail.month}</h5>
                                    <div className="details">
                                        {detail.detail}
                                    </div>
                                    <span className="vlUp">
                                    </span>
                                    <span className="circleUp">
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="year">
                            {data.year}
                        </div>
                        <div className="flexThis">
                            {data.details.map((detail, index)=>
                                <div
                                    style={this.isEven(index)}
                                    key={detail.month}
                                    className="timeLineDetailsContainer"
                                >
                                    <h5>{detail.month}</h5>
                                    <div className="details">
                                        {detail.detail}
                                    </div>
                                    <span className="vlDown">
                                    </span>
                                    <span className="circleDown">
                                    </span>
                                </div>
                            )}
                        </div>
                        
                    </div>)}
                </div>
            </div>
            
        )
    }
}

export default Experience