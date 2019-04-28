import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css';

import Logo from './Images/HeaderLogo.svg'

const toolbar = props => (
    <header className="toolbar">
        <nav className = "toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className = "spacer" />
            <div className = "toolbar__logo">               
                {/* <a href="#"> */}
                <div><a href="#" className="logo">
                        <img src={Logo} alt="Ziraf Logo"></img>
                </a> 
                </div>
            </div> 
            <div className = "spacer1" />
            <div className = "toolbar_navigation-items">
               <ul>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/Team">Team</NavLink> </li>
                    <li> <NavLink to="/Jobs">Jobs</NavLink> </li>
                    <li> <NavLink to="/ContactUs">Contact Us</NavLink> </li> 
               </ul>
           </div>
        </nav>
    </header>
);

export default toolbar;