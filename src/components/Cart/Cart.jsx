import React from 'react';
import './Cart.css';

const Cart = ({food, handleAddToCart}) => {

    return (
        <div className='cart'>
            <h1>Cart component{handleAddToCart}</h1>
        </div>
    );
};

export default Cart;