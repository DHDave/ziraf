import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Image from 'react-image-resizer';

import Home from '../Home/Home';
import Team from '../Team/Team';
import Jobs from '../Jobs/Jobs';
import ContactUs from '../ContactUs/ContactUs';
import PageNotFound from '../PageNotFound/PageNotFound';
import logo from './Images/cute-giraffe.svg';
import  "./Navigation.css"

export default function Navbar() {
  return (
    <div>
      <header className="App-header">
        <div className="logo">
          <div className="img"> 
            <Image
              src={logo}
              height={ 60 }
              width={ 60 }
            />
          </div>
        </div> 
        <div className="menu">
          <ul>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/Team">Team</NavLink> </li>
            <li> <NavLink to="/Jobs">Jobs</NavLink> </li>
            <li> <NavLink to="/ContactUs">Contact Us</NavLink> </li>                
          </ul>
        </div>
      </header>
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Team" component={Team}/>
          <Route path="/Jobs" component={Jobs}/>
          <Route path="/ContactUs" component={ContactUs}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>  
    </div>
  );
}
