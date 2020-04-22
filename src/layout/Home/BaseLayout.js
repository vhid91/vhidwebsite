import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ScrollR from '../../components/ScrollR/ScrollR'
import './styles.scss'

const Home = props => {
    return (
        <div className="Home">
            <Navbar/>
            {props.children}
            <ScrollR/>
        </div>
    )
}

export default Home