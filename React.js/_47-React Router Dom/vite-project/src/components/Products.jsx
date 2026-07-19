import React from 'react'
import { Link , Outlet } from 'react-router-dom'
function Products() {
    return (
        <>
            <h1>Products</h1>
            <input type="text" placeholder='search' />
            <hr />
            <nav>

                <Link to="featured" >
                    <span className="nested">
                        Featured
                    </span>
                </Link>
                <Link to="newProduct" >
                    <span className="nested">
                        New Products
                    </span>
                </Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products