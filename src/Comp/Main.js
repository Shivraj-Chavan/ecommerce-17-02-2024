import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import Nav from './Nav'

export default function Main() {
  return (
    <div>

        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}
