import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Users from './components/Users';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route>
          <Route exact path="/about" element={<About/>}> </Route>
          <Route exact path="/services" element={<Services/>}> </Route>
          <Route exact path="/users" element={<Users/>}> </Route>
        </Routes>
      </BrowserRouter>
    ) ;
  }
}
