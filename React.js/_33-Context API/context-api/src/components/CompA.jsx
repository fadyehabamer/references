import React, { Component } from 'react'
import CompB from './CompB'

export default class A extends Component {
  
  render() {
    return (
      <div>
        <h1>
          Hi From CompA
        </h1>
        <CompB/>
      </div>
    )
  }
}

// * Component B will be rendered in Component A