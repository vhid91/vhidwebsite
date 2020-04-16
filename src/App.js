import React from 'react';
import './App.scss';
import Landing from './pages/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import ScrollR from './components/ScrollR/ScrollR'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import Posts from './pages/Posts/Posts'
import Error404 from './services/Error/404'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

let year = new Date()
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:id" component={Posts} />
            <Route path="/*" component={Error404} />
          </Switch>
        <ScrollR/>
      </BrowserRouter>

      <div className="copyRight">
        &copy; {year.getFullYear()} Vhid Website
      </div>
    </div>
  );
}

export default App;
