import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Users from './components/Users';
import NotFound from './components/NotFound'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        {/* Switch is deprecated at react-router-dom v6
            replaced with <Routes>

            404 page --> make a component with path = "*" 
         */}
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/about" element={<About />}> </Route>
          <Route exact path="/services" element={<Services />}> </Route>
          <Route exact path="/users" element={<Users />}> </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
