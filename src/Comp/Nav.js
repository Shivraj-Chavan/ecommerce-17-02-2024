import React from 'react'
import "./Style.css"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div className='navbar'>
            <div className='logo'>
               <Link to="/" className='nav-link' > <h1>Shopify</h1></Link>
             </div>
            <div className='search-bar'>
                <input type="search" />
            </div>
            <div className='login'>
                <ul>
                   <Link className='nav-link' to="/product"> <li><h2>Products</h2></li></Link>
                   <Link className='nav-link' to="/login"> <li><p>Login</p></li></Link>
                    <Link className='nav-link' to="/cart"><li><AddShoppingCartOutlinedIcon /></li></Link>
                </ul>
            </div>
        </div>
    )
}
