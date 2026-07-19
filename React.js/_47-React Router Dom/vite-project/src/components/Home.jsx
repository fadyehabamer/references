import React from 'react'
import '../App.css'

import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Home</h1>
            <br />
            {/* Navigate programmatically */}

            {/* useNavigate takes path which is configured Route at App.js file */}
            <button onClick={()=>navigate('ordersummary')} className="button">  
                Place Order
            </button>
        </>
    )
}

export default Home