
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Nav} from 'react-bootstrap';
import ItemCount from '../itemCount/ItemCount.js';
import { CartContext } from '../context/Context.js';
import React, {useState, useContext } from 'react';


export const ItemDetail = (props)=>{

  //const {id,title, image,description,stock,precio, discount}=props.product;

  const { addCart } = useContext(CartContext);
  const [cant,setCant]= useState(false);

  const onAdd = (num)=>{
    setCant(true);
    addCart(props, num);
    console.log('props', num)
  }

  return (
   <Container>
    <div className="card card-body  categoria" style={{ width: '50%', height: '20%' }}>
     <Card.Title>{props.title}</Card.Title>
     <img src={props.image} style={{ height: '30%' }} />
      <Card.Body>
        <Card.Text>
         <p>{props.description}</p>
         <span className="text-muted">Stock: { props.stock}</span>
         <p>{props.precio}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container><ItemCount stock={props.stock} onAdd={onAdd}/> </Container>
      </Card.Footer>

    </div>
  </Container>

  );
};


export default ItemDetail