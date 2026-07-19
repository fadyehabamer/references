import React, { Component } from 'react';

export default class Items extends Component {

    render(props) {
        const { items } = this.props
        const renderItems = items.map(item => {
            if (item.price >= 500) {
                return (
                    <div>
                        <ul key={item.id}>
                            <li> {item.id} - {item.name}  - {item.price}  </li>
                        </ul>
                    </div>
                )
            }
            // * ShortHand if
            // * item.price >= 500 ? <li> {item.id} - {item.name}  - {item.price}  </li> : <h1> NO PRODUCTS </h1>
        })
        // console.log(items)
        // console.log(renderItems)

        return <div>
            {/* {console.log(this.props)} */}
            <h2> EXPENSIVE PRODUCTS +500 LE </h2>

            {renderItems}

        </div>;
    }
}
