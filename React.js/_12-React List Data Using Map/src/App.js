import React, { Component } from 'react';
import Item from "./components/item"
export default class App extends Component {

  state = {
    items: [
      { id: "1", name: "Milk", price: "20" },
      { id: "2", name: "Sweets", price: "80" },
      { id: "3", name: "Bread", price: "70" },
      { id: "4", name: "Rice", price: "120" }

    ]
  }



  render() {
    return (
      <div>
        {/* <Item id="1" name="Milk" price="120" />
        <Item id="2" name="Sweets" price="310" />
        <Item id="3" name="Bread" price="150" />
        <Item id="4" name="Rice" price="90" />
        <Item id="5" name="Coffee" price="220" /> */}

        {/* =================================================== */}
        <Item items={this.state.items} />
      </div>
    );
  }
}

