import React from 'react';
import "./Home.css";
import Product from "./Product";
import MyImage from './Images/cover.png';


function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">

                    <img src={MyImage} alt="cover" className="home_image" />

                    <div className="home_row">
                        <Product 
                        id="12321341"
                        title="TOMS Girls Classic Little Kids Workout Athletic and Training Shoes"
                        price={11.96}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/51zYmflj3GL._AC_UY500_.jpg' 
                        />
                        <Product 
                        id="22321342"
                        title="Amazon Smart Thermostat with C-Wire Power Adapter"
                        price={78.98}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51hKSJ6NpYL._AC_SY355_.jpg'/>
                    </div>

                    <div className="home_row">
                          <Product 
                          id="32321343"
                          title="Beats Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip, Class 1 Bluetooth Headphones, 9 Hours of Listening Time, Sweat Resistant, Built-in Microphone - Ivory"
                          price={159.95}
                          rating={4}
                          image='https://m.media-amazon.com/images/I/51b2RRA1QRL._AC_SL1500_.jpg'/>

                          <Product 
                          id="42321344"
                        title="Amazon Smart Thermostat with C-Wire Power Adapter"
                        price={178.98}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/51hKSJ6NpYL._AC_SY355_.jpg'/>

                          <Product 
                          id="52321345"
                          title="Crépe Erase Advanced Body Repair Treatment | Anti Aging Wrinkle Cream for Face and Body, Support Skins Natural Elastin & Collagen Production - 10oz (Fragrance Free)"
                          price={69.99}
                          rating={5}
                          image='https://m.media-amazon.com/images/I/510DxWSBRoL._SL1500_.jpg'/>
                    </div>

                    <div className="home_row" >
                           <Product 
                           id="62321346"
                           title="Ninja DG551 Foodi Smart XL 6-in-1 Indoor Grill with Air Fry, Roast, Bake, Broil, & Dehydrate, Foodi Smart Thermometer, 2nd Generation, Black/Silver"
                           price={159.99}
                           rating={4}
                           image='https://m.media-amazon.com/images/I/719PA1zrZ9L._SL1500_.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;