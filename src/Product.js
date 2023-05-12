import React from 'react';
import "./Product.css";

function Product({is, title, image, price, rating}){
    return(
        <div >
            <div className="product" >
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">⭐️⭐️⭐️</div>
                </div>

                    <img src={image} 
                    alt="products"/>

                    <button>Add to Basket</button>
             </div>
        </div>
        
    )
}

export default Product;