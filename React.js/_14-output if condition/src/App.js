import React, { Component } from 'react';
import Item from './components/Items'

export default class App extends Component {
  state = {
    items : [
      {id : 1 , name : "MILK" , price : 420},
      {id : 2 , name : "COFFEE" , price : 140},
      {id : 3 , name : "TEA" , price : 560},
      {id : 4 , name : "GOLD" , price : 1000},
      {id : 5 , name : "CHEESE" , price : 370}
    ]

  }
  render() {
    return (
    <div>
      <Item items={this.state.items}/>
    </div>
    
    )
  }
}


