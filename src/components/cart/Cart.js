import React, {useContext, useState } from 'react';
import { CartContext } from '../context/Context.js';
import { Container,Button,Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => {
  const [showAddModal, setShowAddModal]= useState(false)
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
             <OrderModal props={item} tot={amount} show={showAddModal} handleClose={()=> setShowAddModal(false)}/>
             </Stack>

             </>
          )
         }
       ): <Stack direction="horizontal" gap="4" className="mb-6 mt-4" >

          <h5 className="me-auto">No hay productos en el carrito</h5>
       <Button as={NavLink} to={`/`} size="sm" variant="outline-success">Volver a la tienda</Button>

       </Stack>
       }

       <div className="cart">
        <div className="items">
       <h5 className="">Total a pagar </h5>
       <h5 className="">${amount}</h5>
       </div>
       </div>
        <div className=" botones">
      <Button as={NavLink} to={`/`} size="lg" variant="outline-success" className="">Volver a la tienda</Button>
      <Button size="lg" variant="outline-success" onClick={() => setShowAddModal(true)}>Pagar</Button>
       </div>
</Container>
  );
};

export default Cart;