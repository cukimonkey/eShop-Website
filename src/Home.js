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
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                          <Product />
                          <Product />
                          <Product />
                    </div>
                    <div className="home_row">
                           <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;