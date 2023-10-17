import React from 'react';
import './MorningFoodPage.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Cart from '../Cart/Cart';

const MorningFoodPage = ({food, handleAddToCart}) => {
    const {name, id, price, img} = food;
   // console.log(handleAddToCart)
    return (
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button onClick={()=> handleAddToCart} variant="outline-info">Order Now</Button>{' '}
      </Card.Body>
      <div>
        
                <p>Name : {name}</p>
                <p>Id : {id}</p>
                <p>Price: {price}</p>
            </div>
    </Card>
     
        
    );
};

export default MorningFoodPage;