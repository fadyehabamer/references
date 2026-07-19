import './App.css';
import React, { Component } from 'react'
import Child from './components/Child';


export default class App extends Component {
  state = {
    name: "FADY EHAB AMER"
  }
  render() {
    return (
      <div className="App">
        <Child name={this.state.name} />
      </div>
    );
  }
}


/*
* statefull   - container --> Class based Component + contains state 
* stateleless - UI        --> not Contains State ==> Function Component

*/


