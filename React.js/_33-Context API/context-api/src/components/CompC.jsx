import React, { Component } from 'react'
import { Consumer } from './Context'

export default class CompC extends Component {
    render() {
        return (
            <Consumer>
                {
                    (name)=>{
                        return(
                            <div>
                                <h1> Hi from CompC </h1>
                                <h1> {name} passed from Context API </h1>
                            </div>
                        )
                    }
                }                
            </Consumer>
        )
    }
}

/*
OLD WAY : want to use name: 'John' in component C --> props to A then to B then to C 
<div>
<h1>
Hi from CompC
</h1>
<i> {this.props.name} from compC passed as props from A to B to C</i>
</div>
*/