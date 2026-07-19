import './App.css';
import React, { Component } from 'react';




class App extends Component {
  state = {
    name: 'FADY EHAB AMER'
  }

  handleClick = () => {
    console.log("CLICKED")
  }

  handleMouseMove = () => {
    console.log("MOUSE MOVED");
  }

  handleDoubleClick = () => {
    console.log("DOUBLE CLICKED");
  }

  // * regular function => bind
  showStateName1(){
    console.log(this.state.name)
  }

  // * Arrow Function => no need to bind 
  showStateName2 = () => {
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}> CLICK ME ! </button>
        <button onMouseMove={this.handleMouseMove}> MouseMove </button>
        <button onDoubleClick={this.handleDoubleClick}> Double Click </button>
        <button onClick={this.showStateName1.bind(this)}> SHOW STATE NAME 1 </button>
        <button onClick={this.showStateName2}> SHOW STATE NAME 2 </button>

      </div>
    )
  }
}


export default App;
