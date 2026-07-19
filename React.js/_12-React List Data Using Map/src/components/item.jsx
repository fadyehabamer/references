import React, { Component } from 'react';


export default class Item extends Component {
    // * as Props is a JS object , when props contains more than one element 
    // * We Can use Object Destructuring
    render() {
        const items = this.props.items
        // const { items } = this.props
        const renderItems = items.map((item) => {
            return (
                <ul key={Math.random() * 10}>
                    <li > {item.id} {item.name} {item.price} </li>
                </ul>
            )
        })
        return (
            <div>
                {
                    /* <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li>{price}</li>
                    </ul> */
                }
                {renderItems}

                <ul>

                </ul>
            </div>
        )
    }
}