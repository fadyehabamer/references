import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  state={
    name:"FADY",
    age : 21
  }

  changeState = ()=>{
    this.setState({
     name : "FADY EHAB AMER",
      age : "MY AGE IS 21"
    })
  }

  render() {
    return (
    <div className="App">  
      <button onClick={this.changeState}> Change State </button>
      <p> {this.state.name} </p>
      <p> {this.state.age} </p>

    </div>
  )
  }
}

