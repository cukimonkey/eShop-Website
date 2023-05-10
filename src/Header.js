import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return(
        <div className='header'>
            <div className='header_logo'>
        <StorefrontIcon className='header_logoImage' fontSize='large'/>
        <h2 className='header_logoTitle'>eShop</h2>
      </div>

      <div className="header_search">
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <spam className="nav_itemLineOne">Hello Guest</spam>
          <spam className="nav_itemLineTwo">Sign In</spam>
        </div>
        <div className="nav_item">
          <spam className="nav_itemLineOne">Your</spam>
          <spam className="nav_itemLineTwo">Shop</spam>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon className='itemBasket'/>
          <spam className="nav_itemLineTwo nav_basketCount">0</spam>
        </div>
      </div>
        </div>
    )
}

export default Header