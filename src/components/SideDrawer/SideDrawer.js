import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
        let drawerClasses = ['side-drawer'];
        if (props.show) {
            drawerClasses = ['side-drawer open']; 
        }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Team">Team</NavLink> 
            </li>
            <li>
                <NavLink to="/Jobs">Jobs</NavLink> 
            </li>
            <li>
                <NavLink to="/ContactUs">Contact Us</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;