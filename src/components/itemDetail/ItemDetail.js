import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container,Button} from 'react-bootstrap';
import ItemCount from '../itemCount/ItemCount.js';
import { CartContext } from '../context/Context.js';
import React, {useState, useContext } from 'react';


export const ItemDetail = (props)=>{

  //const {id,title, image,description,stock,precio, discount}=props.product;

  const { addCart } = useContext(CartContext);
  const [cart,setCart]= useState(false);

  const onAdd = (num)=>{
    setCart(true);
    addCart(props.item, num);

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
        {cart ?(
          <Button as={NavLink} activeClassName="active" className="btn btn-success" to={`/cart`}>Carrito</Button>
        ):(
          <Container><ItemCount stock={props.stock} onAdd={onAdd}/> </Container>
        )}

      </Card.Footer>

    </div>
  </Container>

  );
};


export default ItemDetail