import React, { Component, createRef } from 'react'
import './App.css'
export default class App extends Component {
  inputText = createRef()

  state = {
    name: "FADY",
  }

  changeState = () => {
    this.setState({
      name: this.inputText.current.value,
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          Auto Focus on Reload
        </h1>
        <div className="controls">
          <input type="text" ref={this.inputText} />
          <button onClick={this.changeState}>Show</button>
        </div>
        <div className="result">
          <p>
            Result is : {this.state.name}
          </p>
        </div>
      </div>
    )
  }
}
