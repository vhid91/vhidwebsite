import React, { Component } from 'react'
import './style.scss';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'

class ScrollR extends Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
        this.isScrollDown = false

        this.debounce = _.debounce(this.addListener, 1500);
    }

    
    
    componentDidMount(){
        window.addEventListener('wheel', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('wheel', this.handleScroll);
    }
    handleScroll(e){
        const { location, history } = this.props;
        const currentLocation = location.pathname
        this.isScrollDown = e.deltaY < 0 ? false : true
        this.history(currentLocation, this.isScrollDown, history)
    }
    addListener(){
        window.addEventListener('wheel', this.handleScroll);
    }
    scrollTimeOut(){
        window.removeEventListener('wheel', this.handleScroll);
        this.debounce()
    }
    history = (currentLocation, isScrollDown, history)=>{
        if(currentLocation === "/" && isScrollDown) history.push("/about")
        if(currentLocation === "/about" && !isScrollDown) history.push("/")
        if(currentLocation === "/about" && isScrollDown) history.push("/work")
        if(currentLocation === "/work" && !isScrollDown) history.push("/about")
        if(currentLocation === "/work" && isScrollDown) history.push("/contact")
        if(currentLocation === "/contact" && !isScrollDown) history.push("/work")
        
        this.scrollTimeOut()
    }
    isUp = () => {
        const { location, history } = this.props;
        this.history(location.pathname, false, history)
    }
    isDown = () => {
        const { location, history } = this.props;
        this.history(location.pathname, true, history)
    }
    render(){
        
        const { location } = this.props;
        const currentLocation = location.pathname
        return(
            <div className="ScrollR" >
                {currentLocation === "/" ? '' : <a onClick={this.isUp}><i className="fa fa-angle-up"></i></a>}
                <br />
                <span>Scroll</span>
                <br />
                {currentLocation !== "/contact" ? <a onClick={this.isDown}><i className="fa fa-angle-down"></i></a> : <span style={{opacity: 0}}><i className="fa fa-angle-down"></i></span>}
            </div>
        )
    }
}

export default withRouter(ScrollR)