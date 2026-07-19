import React from 'react'
import {useParams} from 'react-router-dom'
function UserDetails() {
    const params = useParams()
    const {id} = params
    return (
        <>
            <h1>UserDetails</h1>
            <h2> Username : user {id} </h2>
            <h2> Email : blabla@email.com </h2>
            <h2> Phone : +123456789  </h2>
        </>
    )
}

export default UserDetails