import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Ordersummary() {
    const backHome = useNavigate()
    return (
        <>
            <h1>
                Order Confirmed
            </h1>

            <button onClick={()=>backHome(-1)} className='button'>
                Go Back to Home
            </button>
        </>
    )
}

export default Ordersummary