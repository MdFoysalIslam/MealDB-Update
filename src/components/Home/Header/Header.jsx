import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
import logo from '../../Image/Logo.jpg';

const Header = () => {
    return (
        <div className="header">
           
            <div className='text-path'>
                <div> <Link to='/manu'>Manu</Link> </div>
                <div> <Link to='/order'>Order</Link> </div>
                <div> <Link to='/Offer'>Offer</Link> </div>
                <div> <Link to='/carier'>Carier</Link> </div>
                <div> <Link to='/about'>About</Link> </div>
            </div>
        </div>
    );
};

export default Header;