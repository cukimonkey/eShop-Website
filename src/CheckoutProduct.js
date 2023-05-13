import React from "react";
import "./CheckoutProduct.css"
//import { useStateValue } from "./StateProvider";

// eslint-disable-next-line no-unused-vars
function CheckoutProduct({id, image, title, price, rating}) {
  //  const [{basket}, dispatch] = useStateValue();

    return (
        <div >
        <div className="checkoutProduct" >
            <img src={image}
                alt="products" className="checkoutProduct__image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {/* {JSON.stringify(rating)} */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <button>Remove from Basket</button>
            </div>

         </div>
    </div>
    )
}

export default CheckoutProduct;