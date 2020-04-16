import React, {Component} from 'react';
import './style.scss';
import Tilt from 'react-parallax-tilt';
import 'font-awesome/css/font-awesome.min.css';
import {TimelineLite} from 'gsap';
import { socialBtn } from './ButtonData'



class Social extends Component {

    constructor(props){
        super(props);
        this.myElements = [];
        this.tl = new TimelineLite({ paused: false });
    }
    
    componentDidMount(){
        this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    }

    render(){
        return (
            <div className="social">    
                <ul>
                    {socialBtn.map((element, index) => <li
                        key={element.href}
                        ref={li => this.myElements[index] = li}
                    >
                        <Tilt tiltEnable={false} scale={1.1}><a href={element.href}><i className={element.faName}></i></a></Tilt>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Social