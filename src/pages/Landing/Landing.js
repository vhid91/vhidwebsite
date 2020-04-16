import React, {Component} from 'react';
import './style.scss';
import Tilt from 'react-parallax-tilt';
import 'font-awesome/css/font-awesome.min.css';
import {TweenMax, Power3} from 'gsap';
import Social from '../../components/Social/Social'
import Explore from '../../components/Explore/Explore'

const publicFolder = process.env.PUBLIC_URL

const tagline = "{ David Abaiz online portfolio. }" 

class Landing extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.titleElement = null;
        this.subTitleElement = null;
        this.state = {
            isExploring : false
        }
      }

    componentDidMount(){
        TweenMax.to(
            this.titleElement,
            1,
            {
                opacity: 1,
                y: - 20,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            this.subTitleElement,
            2,
            {
                opacity: 1,
                ease: Power3.easeOut,
                delay: .5
            }
        )
    }

    explore = () => {
        this.setState({
            isExploring: !this.state.isExploring,
        })

    }

    render(){
        const {
            isExploring
        } = this.state
        return(
            <div className="landing">
            {isExploring ? <Explore/> : ""}
            <div className="exploreBtn" onClick={this.explore}>
                <i className={isExploring ? "fa fa-window-close" : "fa fa-bars"}></i> {isExploring ? "CLOSE" : "EXPLORE"}
            </div>
            <Tilt 
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
            >
                <div className="tableDiv">
                    <div className="tableCellDiv">
                        <div className="title" ref={div => this.titleElement = div}>
                            <img src={`${publicFolder}/logo.png`} width="75%"/>
                        </div>
                        <center ref={div => this.subTitleElement = div}>
                            <div className="subtitle" >
                                {tagline}    
                            </div>
                            <Social/>
                            
                        </center>
                    </div>
                </div>     
            </Tilt>
        </div>
        )
    }
}

export default Landing;
