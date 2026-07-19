import React, { Component } from 'react';
import Item from './components/Items'

export default class App extends Component {

  // * =======================================================================
  // * Life Cycle Component
  // * 1- Constructor
  // * 2- render
  // * 3- componentDidMount
  // * 4- componentDidUpdate 
  // * ==========================================================================

  constructor() {
    // * the constructor for a React component is called before it is mounted.
    // * When implementing the constructor for a React.Component subclass,
    // * you should call super(props) before any other statement. Otherwise
    // *, this.props will be undefined in the constructor, which can lead to bugs.
    // * To Make Constructor work --> super()

    super();
    console.log("HI FROM CONSTRUCTOR");
  }

  componentDidMount() {
    // * ONCE REFRESH ONLY
    console.log("HI FROM componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // * Will not Work until there is a CHANGE
    // * Compare old state with new state
    // * render will be called at Every Update
    console.log("HI FROM componentDidUpdate", prevProps, prevState);

  }


  state = {
    items: [
      { id: 1, name: "MILK", price: 420 },
      { id: 2, name: "COFFEE", price: 140 },
      { id: 3, name: "TEA", price: 560 },
      { id: 4, name: "GOLD", price: 1000 },
      { id: 5, name: "CHEESE", price: 370 }
    ]

  }


  handleState=()=>{
    this.setState({
      items: [
        { id: 1, name: "MILK", price: 520 },
        { id: 2, name: "COFFEE", price: 1040 },
        { id: 3, name: "TEA", price: 5360 },
        { id: 4, name: "GOLD", price: 10400 },
        { id: 5, name: "CHEESE", price: 3570 }
      ]
    })
  }

  render() {
    console.log("HI FROM RENDER");
    return (
      <div>
        <h1> OPEN CONSOLE </h1>
        <Item items={this.state.items} />
        <button onClick={this.handleState}> Change State [componentDidUpdate work] </button>
      </div>
    )
  }
}


