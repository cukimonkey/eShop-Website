import React from "react";
import "./CheckoutProduct.css"

function Checkout() {
    return (
        <div >
        <div className="checkoutProduct" >
            <img src='https://m.media-amazon.com/images/I/51zYmflj3GL._AC_UY500_.jpg'
                alt="products" className="checkoutProduct__image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">TOMS Girls Classic Little Kids Workout Athletic and Training Shoes</p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>56.99</strong>
                </p>

                <div className="checkoutProduct__rating">
                    <p>⭐️⭐️</p>
                </div>
                <button>Remove from Basket</button>
            </div>

                
         </div>
    </div>
    )
}

export default Checkout;