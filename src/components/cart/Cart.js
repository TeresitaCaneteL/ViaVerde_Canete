import React, {useContext } from 'react';
import { CartContext } from '../context/Context.js';
import {Card, Container,Button,Stack} from 'react-bootstrap';

const Cart = () => {
  const { cart } = useContext(CartContext);
  //console.log(cart)

  return (
    <Container>
        <Stack direction="horizontal" className=" mt-4">
       <h5 className="me-auto">Producto</h5>
       <h5 className="me-auto">Cantidad</h5>
       <h5 className="me-auto">Precio</h5>
       <h5 className="me-auto">Total</h5>
       <h5 className=""></h5>


       </Stack>

         {cart.length !== 0 ? cart.map((item) =>{
            //const amount = cart.reduce((item, cart) => item.newItem.price + cart.newItem.price, 0)
          return (
            <Stack direction="horizontal" gap="4" className="mb-6 mt-4" >
             <img src={item.newItem.image} style={{ height: '10rem', width: '10rem' }} className="me-auto" />
             <h5 className="me-auto">{item.quantity}</h5>
             <h5 className="me-auto">${item.newItem.price}</h5>
             <h5 className="me-auto">$total</h5>
             <Button variant="success">Eliminar</Button>

             </Stack>
          )
         }
       ):'no hay productos'}


</Container>
  );
};

export default Cart;