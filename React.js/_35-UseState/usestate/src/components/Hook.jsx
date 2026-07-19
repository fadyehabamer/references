import React, { useState } from 'react'

export default function Hook({ type, order }) {
    const [product, setProduct] = useState('Laptop')
    const changeProduct = () => {
        setProduct('Mobile')
    }
    const [electronics, setElectronics] = useState([
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Mobile' },
        { id: 3, name: 'TV' },
    ]);

    const addElectronic = () => {
        setElectronics([...electronics, { id: electronics.length + 1, name: 'SmartWatch' }])
    }

    const [inputVal , setInputVal] = useState('')
    return (
        <>
            <div>
                <h3>
                    THIS IS  {type} & ITS ORDER IS {order} & PRODUCT IS {product}
                </h3>

                <button onClick={changeProduct}>Update Hook Component State 1 </button>
                <button onClick={() => setProduct('IPHONE')}>Update Hook Component State 2 </button>
            </div>

            <hr />

            <div>
                <h3>Electronics State</h3>
                <ul>
                    {electronics.map(item =>
                    (
                        <li key={item.id}>{item.name}</li>


                    )
                    )}
                </ul>
                <button onClick={() => addElectronic()}>
                    ADD New Electronic
                </button>
            </div>

            <hr />

            <div>
                <h3>
                    Input State
                </h3>
                <input type="text" onChange={(e)=>{setInputVal(e.target.value)}}/> 
                <br />
                <span> Value of Input is : {inputVal} </span>
            </div>
        </>
    )
}

// * this keyword is not available in function based component
// * before react 16.8.0 this.state is not available in function based component
// * Can't use state in functional component
// * instead of state use useState

// * useState is a hook

// * Component life cycle is not available in functional component