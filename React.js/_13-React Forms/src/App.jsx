import React, { Component } from 'react';
import './App.css'
export default class App extends Component {
  state = {
    name: "NULL",
    message: 'NULL',
    selectOpt: 'NULL'
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name == '') {
      alert("WRITE YOUR NAMMMME")
    } else {
      alert(`YOU HAVE SENT ... ${this.state.name}`)
    }
  }


  handleTextAreaChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }


  handleSelectChange = (e) => {
    this.setState({
      selectOpt: e.target.value
    })
  }

  render() {
    return (
      <div className="App">

        {/* Prefarable to make onSubmit Event in the form tag not in submit button ... 
        to make formsubmit when click on button or whn user hit Enter Ket */}

        <form onSubmit={this.handleSubmit} action="">
          <div>
            <input placeholder='enter name' type="text" onChange={this.handleInputChange} />
            <h2> State 'Name' value is  <span style={{ color: "red" }}> {this.state.name} </span>  </h2>
            <h2> State 'message' value is  <span style={{ color: "red" }}> {this.state.message} </span>  </h2>
          </div>
          <br />
          <div>
            <textarea cols="50" rows="10" placeholder="enter message" onChange={this.handleTextAreaChange} />
            <h4> Your letters count is <span style={{ color: "red" }}> {this.state.message.length} </span>  </h4>
          </div>
          <br />
          <div>
            <select onChange={this.handleSelectChange}>
              <option value="1"> vlaue 1 </option>
              <option value="2"> vlaue 2 </option>
              <option value="3"> vlaue 3 </option>
            </select>
            <h4> Your Choice is <span style={{ color: "red" }}> {this.state.selectOpt} </span>  </h4>

          </div>
          <br />

          <button type="submit">Sumbit</button>
        </form>
        <h2> Press Submit or Hit ENTER key after Finishing </h2>


      </div>
    )
  }
}
