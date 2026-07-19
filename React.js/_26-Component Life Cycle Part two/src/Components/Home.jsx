/*
* stages of component
    1- Mounting - Add to Dom     [constructor-getDerivedStatefromProps-Render-ComponedDidMount]
    2- Updating - ReRendering    [getDerivedStatefromProps - shouldComponentUpdate - render - getsnapShotBeforeUpdate  - ComponentDidupdate ]
    3- UnMounting - Removed from Dom [componentWillMount]
*/

import React, { Component } from 'react'
export default class Home extends Component {

    // *==========================Mounting=================================
    constructor(props) {
        super(props);
        console.log('Hi from Constructor');
        // * Intialize State here is preferable
        this.state = {
            item: this.props.x,
            componentName: 'Home Component'
        }
    }

    static getDerivedStateFromProps(props, state) {
        // * as it is static .. this.setState is not allowed
        console.log('Hi form getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        // * after render 
        // * Requests goes here is preferable
        console.log('Hi from componentDidMount')
    }

    // *===============================Updating===============================
    updateComponent = () => {
        this.setState({
            componentName: 'Home Component after Updating'
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // * performance .. if no change component should not update
        console.log('Hi from shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        // * work between updating and reflecting into DOM
        console.log('Hi from getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Hi from componentDidUpdate');
    }

    // *====================UnMounting=========================================
    componentWillUnmount() {

    }
    render() {
        console.log('Hi from Render');
        return (
            <div>
                <div>{this.state.componentName}</div>
                <button onClick={this.updateComponent}> update Home Component </button>
            </div>
        )
    }
}
