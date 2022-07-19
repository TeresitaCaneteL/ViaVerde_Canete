import React, {useContext } from 'react';
import { CartContext } from '../context/Context.js';
import {Card, Container,Button,Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => {
  const { cart,  removeCart } = useContext(CartContext);
  //console.log(cart)
  let amount=0;
  cart.map( i =>  amount = (amount+ ( parseInt(i.newItem.price) * parseInt(i.quantity)) ))
  return (
    <Container>
        <Stack direction="horizontal" className=" mt-4">
       <h5 className="me-auto">Producto</h5>
       <h5 className="me-auto">Cantidad</h5>
       <h5 className="me-auto">Precio</h5>



       </Stack>

         {cart.length !== 0 ? cart.map((item) =>{

          return (
            <>
            <Stack direction="horizontal" gap="4" className="mb-6 mt-4" >
             <img src={item.newItem.image} style={{ height: '10rem', width: '10rem' }} className="me-auto" />
             <h5 className="me-auto">{item.quantity}</h5>
             <h5 className="me-auto">${item.newItem.price}</h5>

             <Button onClick={() => removeCart(item.newItem.id)} size="sm" variant="outline-danger">Eliminar</Button>
             </Stack>

             </>
          )
         }
       ):'no hay productos'}
       <div className="cart">
       <h5 className="me-auto">Total a pagar: </h5>
       <h5 className="me-auto">${amount}</h5>
      </div>
</Container>
  );
};

export default Cart;