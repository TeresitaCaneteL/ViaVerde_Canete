import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Nav} from 'react-bootstrap';
import ItemCount from '../itemCount/ItemCount.js';

export const ItemDetail = ({
  id,
  title,
  image,
  description,
  stock,
  precio,
  discount,
}) => {
  return (
   <Container>
    <div className="card card-body  categoria" style={{ width: '20rem' }}>
     <Card.Title>{title}</Card.Title>
     <img src={image} style={{ height: '20rem' }} />
      <Card.Body>
        <Card.Text>
         <p>{description}</p>
         <span className="text-muted">Stock: { stock}</span>
         <p>{precio}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container><ItemCount stock={stock}/></Container>
      </Card.Footer>

    </div>
  </Container>

  );
};


export default ItemDetail