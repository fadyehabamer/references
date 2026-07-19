import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import CompA from './components/CompA'

import { Provider } from './components/Context'

export default class App extends Component {
  state = {
    name: 'John'
    // OLD WAY : want to use name: 'John' in component C --> props to A then to B then to C
  }
  render() {
    return (
      <Provider value={this.state.name}>
        <div className='App'>
          <CompA />
        </div>
      </Provider>
    )
  }
}

