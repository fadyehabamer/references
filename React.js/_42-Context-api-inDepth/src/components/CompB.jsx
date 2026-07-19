import React from 'react'
import { useContext } from 'react'

import { CounterCxt } from '../contexts/CounterContext'
import { NameCxt } from '../contexts/NameContext'

function CompB() {
    const name = useContext(NameCxt)
    const { counter } = useContext(CounterCxt)
    return (
        <div>
            <h2>Component B : {counter}  , {name} </h2>

        </div>
    )
}

export default CompB



// Before Hooks:
// return (
//     <CounterCxt.Consumer>

//         {({ counter }) => (
//             <NameCxt.Consumer>
//                 {({ name }) => (
//                     <div>
//                         <h3>Counter value is  {counter} which is rendered at component B </h3>
//                         <h3>Name value is {name} which is rendered at component B</h3>
//                     </div>
//                 )}
//             </NameCxt.Consumer>
//         )}

//     </CounterCxt.Consumer>
// )