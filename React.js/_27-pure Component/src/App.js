import React, { Component, Fragment } from 'react'
import Home from './Home'

export default class App extends Component {
  state = {
    name: 'App Component',
  }
  updateName = () => {
    this.setState({
      name: 'App Component Updated'
    })
  }
  render() {
    console.log('Hi from App Component');
    return (
      <Fragment>
        {this.state.name}
        <button onClick={this.updateName}> update name </button>
        <Home />
      </Fragment>
    )
  }
}

// * as app component extend component --> when update , It will re-render with all its children
// * if Child Component extends PureComponent --> when update parent ,  if child is not affected it will not re-render   
// * Shallow Comparison --> compare old state with new state
// *                    --> implement componentShouldUpdate()