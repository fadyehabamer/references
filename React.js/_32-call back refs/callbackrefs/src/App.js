import logo from './logo.svg';
import './App.css';

import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.callbackRef = null;
    this.callbackRefFunc = (ele) => {
      this.callbackRef = ele;
    }
  }

  componentDidMount() {
    this.callbackRef.focus();
  }


  render() {
    return (

      <div className="App">
        <h1>
          Auto Focus on Reload
        </h1>
        <h3>
          using <i> CallbackRef </i>
        </h3>
        <input type="text" ref={this.callbackRefFunc} />
      </div>
    
    )
  }
}

