import React, { Component } from 'react';
import './style.scss';
import Tilt from 'react-parallax-tilt';
import { NavLink  } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <Tilt scale={1.1}>      
                    <ul>
                        <li>
                            <Tilt scale={1.3}> 
                                <NavLink 
                                    exact={true}
                                    to="/" 
                                    activeClassName='active'
                                >
                                    <i className="fa fa-home"></i>
                                </NavLink >
                            </Tilt>
                        </li>
                        <li>
                            <Tilt scale={1.3}> 
                                <NavLink
                                    to="/about" 
                                    activeClassName='active'
                                >
                                    <i className="fa fa-address-card"></i>
                                </NavLink >
                            </Tilt>
                        </li>
                        <li>
                            <Tilt scale={1.3}> 
                                <NavLink
                                    to="/work" 
                                    activeClassName='active'
                                >
                                    <i className="fa fa-briefcase"></i>
                                </NavLink >
                            </Tilt>
                        </li>
                        <li>
                            <Tilt scale={1.3}> 
                                <NavLink
                                    to="/contact" 
                                    activeClassName='active'
                                >
                                    <i className="fa fa-envelope"></i>
                                </NavLink >
                            </Tilt>
                        </li>
                    </ul>
                </Tilt> 
            </div> 
        );
    }
}
export default Navbar;
  