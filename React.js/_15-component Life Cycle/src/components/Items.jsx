import React, { Component } from 'react';
import '../styles/items.css'
export default class Items extends Component {

    render(props) {
        const { items } = this.props
        const renderItems = items.map(item => {

            return (
                <li> {item.id} - {item.name}  - {item.price}  </li>
            )

        })
        // console.log(items)
        // console.log(renderItems)

        return <div>
            {/* {console.log(this.props)} */}
            <ul>
                <li> ID - Type - Price </li>
                {renderItems}
            </ul>


        </div>;
    }
}
