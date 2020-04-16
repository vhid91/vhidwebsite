import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ScrollR from '../components/ScrollR/ScrollR'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import About from '../pages/About/About'
import Work from '../pages/Work/Work'
import Contact from '../pages/Contact/Contact'

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Navbar/>
                    <Route exact path="/" component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/contact" component={Contact} />
                    <ScrollR/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Home