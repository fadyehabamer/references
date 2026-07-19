import React, { Component, Fragment } from 'react'

export default class Home extends Component {
    render() {
        return (
            <Fragment key={Math.random() * 1000}>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </Fragment>

        )
    }
}
