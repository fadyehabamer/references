import './App.css';

import React, { Component } from 'react'
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/compa' element={<CompA/>} />
            <Route exact path='/compb' element={<CompB/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

