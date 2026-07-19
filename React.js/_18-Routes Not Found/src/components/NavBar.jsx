import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css"


export default function NavBar() {
    return (
        <nav>
            <Link exact to="/"> HOME </Link>
            <ul>
                <Link exact to="/about"> About </Link>
                <Link exact to="/services"> Services  </Link>
                <Link exact to="/users">Users</Link>
            </ul>
        </nav>
    )

}
