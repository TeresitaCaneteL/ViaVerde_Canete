import React, {useContext } from 'react';
import { CartContext } from '../context/Context.js';
import { FaCartPlus } from "react-icons/fa";
import './CartWidget.css';

function CartWidget(){
  const { cart } = useContext(CartContext);
  let cant=0;
  cart.map( i =>  cant = (cant + (parseInt(i.quantity))))
    return(
        <div className='cartWidget'>
           <h3><FaCartPlus style={{color: 'white', fontSize: '50px'}}/></h3>
           <h1 style={{color: 'white', fontSize: '20px'}}>{cant}</h1>
        </div>
    );
}

export default CartWidget;

