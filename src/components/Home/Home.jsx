import React from 'react';
import './Home.css';
import Header from './Header/Header';
import { Outlet, Link } from "react-router-dom";
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import logo from '../Image/Logo.jpg';

const Home = () => {
    
    return (
        <div>
            <div className='home text-center'>
                <img src={logo} alt="" className='img' />
                <Header></Header>                
                <div className='home-container'>
                    <div className='shop-container'>
                    <Shop></Shop>
                    </div>
                    <div className='cart-container'>
                        <Cart></Cart>
                    </div>
                </div>
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;