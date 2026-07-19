import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Ordersummary from './components/Ordersummary'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Nomatch from './components/Nomatch'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <>
      <Navbar />
      <div className="container">
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ordersummary" element={<Ordersummary />} />
          {/* nested Routes */}
          <Route path="/products" element={<Products />} >
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="newProduct" element={<NewProducts />} />
          </Route>

          <Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          </Route>

          <Route path='*' element={<Nomatch />} />

        </Routes>
      </div>
    </>
  )
}

export default App
