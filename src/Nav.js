import React from 'react';
import "./Nav.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'


function Nav() {
    return(
        <div className='nav'>
          <Link to="/" style={{textDecoration: 'none'}}>
          <div className='nav_logo'>
            <StorefrontIcon className='nav_logoImage' fontSize='large'/>
            <h2 className='nav_logoTitle'>eShop</h2>
          </div>
          </Link>

          <div className="nav_search">
            <input type='text' className='nav_searchInput' />
            <SearchIcon className='nav_searchIcon'/>
          </div>

          <div className="nav_nav">
            <div className="nav_item">
              <spam className="nav_itemLineOne">Hello Guest</spam>
              <spam className="nav_itemLineTwo">Sign In</spam>
            </div>
            <div className="nav_item">
              <spam className="nav_itemLineOne">Your</spam>
              <spam className="nav_itemLineTwo">Shop</spam>
            </div>

            <Link to="/checkout" style={{textDecoration: 'none'}}>
            <div className="nav_itemBasket">
              <ShoppingBasketIcon className='itemBasket'/>
              <spam className="nav_itemLineTwo nav_basketCount">0</spam>
            </div>
            </Link>

          </div>
    </div>
    )
}

export default Nav;