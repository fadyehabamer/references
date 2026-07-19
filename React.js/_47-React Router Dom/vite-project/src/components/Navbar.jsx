import React from 'react'
import '../App.css'

import {Link , NavLink} from 'react-router-dom'

function Navbar() {

    const activeLink = ({isActive})=>{
        // console.log('active')
        return{
            background :  isActive ? '04aa6d' : '',
            color : isActive ? 'white' : 'white'

        }
    }

    return (
        <div className="topnav">
            <NavLink style={activeLink} to="/" >Home</NavLink>
            <NavLink style={activeLink} to="/about">About</NavLink>
            <NavLink style={activeLink} to="/products">Products</NavLink>
            <NavLink style={activeLink} to="/users">Users</NavLink>
        </div>
    )
}

export default Navbar