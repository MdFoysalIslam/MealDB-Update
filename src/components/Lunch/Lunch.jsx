import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LunchFoodData from '../../../public/LunchFoodData';
import LunchFood from '../LunchFood/LunchFood';
import './Lunch.css';

const Lunch = () => {
    const data = LunchFoodData;
    console.log(data);
    return (
        <div className='lunch-food'>
            
            {
                data.map(data => <LunchFood data ={data}></LunchFood>)
            }
        </div>
    );
};

export default Lunch;