import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch,NavLink } from 'react-router-dom'; 
import Home from './component/Home'; 
import About from './component/About-us'; 
import Contact from './component/Contact'; 
import Login from './component/login';

function App() {

return (
  <div className="App">
    <Router> 
          <div className="App"> 
          <ul className="App-header"> 
            <li> 
              <Link to="/">Home</Link> 
            </li> 
            {/* <li> 
              <Link to="/about">About Us</Link> 
            </li>  */}
            <li> 
              <Link to="/contact">Contact Us</Link> 
            </li> 
            <li>
              <NavLink to="/about" exact activeStyle = {
                { color:'green' }
              }>
                About(using NavLink)
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" exact activeStyle = {
                { color:'green' }
              }>
                Login(using NavLink)
              </NavLink>
            </li>
          </ul>  
          <Switch> 
            <Route exact path='/' activeStyle={
            { color:'green' } }component={Home}></Route> 
            <Route exact path='/about' exact strict component={About}></Route> 
            <Route exact path='/contact' component={Contact}></Route> 
            <Route exact path='/login' component={Login}></Route> 
          </Switch> 
        </div> 
      </Router> 
  </div>
  );
}

export default App;
