import React from 'react';
import "./Product.css";

function Product(){
    return(
        <div>
            <div className="product">
                <div className="product_info">
                    <p>TOMS Girls Classic Little Kids Workout Athletic and Training Shoes</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                    <div className="product_rating">⭐️⭐️⭐️</div>
                </div>

                    <img src='https://m.media-amazon.com/images/I/51zYmflj3GL._AC_UY500_.jpg' 
                    alt="products"/>

                    <button>Add to Basket</button>
             </div>
        </div>
        
    )
}

export default Product;