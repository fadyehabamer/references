import React, { Component } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/compa"}>Component A</NavLink>
        <NavLink to={"/compb"}>Component B</NavLink>
      </div>
    )
  }
}
