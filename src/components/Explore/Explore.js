import React, { Component } from 'react'
import './style.scss';
import {TweenMax} from 'gsap';
import { Transition } from "react-transition-group";

class Explore extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.emploreElement = null;
        this.state = {
            show : false
        }
      }
    

    componentDidMount(){
        this.setState({
            show : !this.state.show
        })
    }

   render(){
    const { show } = this.state;
        return(
            <Transition
          timeout={1000}
          mountOnEnter
          unmountOnExit
          in={show}
          addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
              x: show ? 0 : 100,
              autoAlpha: show ? 1 : 0,
              onComplete: done
            });
          }}
        >
            <div className="explore" ref={div => this.emploreElement = div}>
                <ul>
                    <li>
                        Blog
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Games
                    </li>
                    <li>
                        Anything Goes
                    </li>
                </ul>
                <h1>UNDER CONSTRUCTION</h1>
            </div>
            </Transition>
        )
   }
}

export default Explore