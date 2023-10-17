import React from 'react';
import {Link} from 'react-router-dom';
import './shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className='product-container'>           
                <div className='box'>
                    <div className='morning'><Link to ="/morning">Morning</Link></div>
                    <div className='lunch'><Link to ="/lunch">Lunch</Link></div>
                    <div className='dinner'><Link to ="/dinner">Dinner</Link></div>
                </div>
            </div>

                
        </div>
    );
};

export default Shop;