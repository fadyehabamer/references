import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "../App.css"

export default function NavBar() {
    return (
        <nav>
            <Link to='/'> LOGO </Link>
            <ul>
                <NavLink exact to="/about">  About </NavLink>
                <NavLink exact to="/services">Services</NavLink>
                {/* 
                    - Link , NavLink is doing the same function 

                    - But NavLink add Class "active"  to the Current Component
                    but also add "exact" after Navlink to prevent multiple active class for multiple component 
                    
                    - to Change class "active" with any desired className
                        --> activeClassName="BLABLA HERE"
                */}
            </ul>
        </nav>
    );
}
