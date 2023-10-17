import React from 'react';
import './DinnerFood.css';
import { Button, Card } from 'react-bootstrap';

const DinnerFood = ({Dinner}) => {
    const {name, id, img, price} = Dinner;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
         
          </Card.Text>
          <Button variant="outline-info">Order Now</Button>{' '}
        </Card.Body>
        <div>
                  <p>Name : {name}</p>
                  <p>Id : {id}</p>
                  <p>Price: {price}</p>
              </div>
      </Card>
    );
};

export default DinnerFood;