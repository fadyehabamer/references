import React, { Component } from 'react'

export default class ClassBased extends Component {
    state = {
        product: 'Laptop',
    }

    componentDidMount() {
        console.log('ClassBased componentDidMount')
    }
    render() {
        return (
            <h3>
                THIS IS  {this.props.type} & ITS ORDER IS {this.props.order} & PRODUCT IS {this.state.product}
            </h3>
        )
    }
}
