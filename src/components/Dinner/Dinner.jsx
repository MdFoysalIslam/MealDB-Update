import React from 'react';
import DinnerData from '../../../public/DinnerFoodData';
import DinnerFood from '../DinnerFood/DinnerFood';
import './Dinner.css';

const Dinner = () => {
    const Dinner = DinnerData;

    return (
        <div className='dinner-food'>
            {
                Dinner.map(Dinner => <DinnerFood Dinner ={Dinner}></DinnerFood>)
            }
        </div>
    );
};

export default Dinner;