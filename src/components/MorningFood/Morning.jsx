import React, { useEffect, useState } from 'react';
import MorningFoodPage from '../MorningFoodPage/MorningFoodPage';
import './Morning.css';


const Morning = () => {
   const [foods, setFoods] = useState([]);

   useEffect( () => {
    fetch("MorningFoodData.json")
    .then(res=> res.json())
    .then(data=>setFoods(data))
   }, )

   const handleAddToCart = (foods) => {
   const exists = foods.find(fd => fd._id === foods.id)
   if(exists) {
    setFoods(exists)
   }
   else {
    const newFoods = [...foods, exists];
    setFoods(newFoods)
   } 
   }
    return (
        <div className='morning-food'>
            {
                foods.map(food => <MorningFoodPage 
                    food={food}
                    handleAddToCart={handleAddToCart}
                />)
            }
        </div>
    );
};

export default Morning;