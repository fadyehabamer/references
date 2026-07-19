import React, { Component } from 'react'
import CompC from './CompC'
export default class CompB extends Component {
  render() {
    return (
      <div>
        <h1> Hi from CompB </h1>
        {/* <CompC name={this.props.name}/> */}
        <CompC />
      </div>
    )
  }
}
