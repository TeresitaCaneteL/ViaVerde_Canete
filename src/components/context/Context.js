import React, {useState, createContext } from 'react';


export const CartContext = createContext({})

const {Provider}=CartContext

export const CartProvider = ({defaultValue = [], children}) =>{
  const [cart, setCart]=useState(defaultValue);
  const clearCart=()=>{
    setCart([]);
  }
  const addCart = (newItem, quantity) => {
    !cart.find(item => item.id === newItem.id) && setCart([...cart, { ...newItem, quantity }]);
};

  const context = {
    clearCart,
    addCart,
    cart
  }

  return(
    <Provider value={context}>
      {children}
    </Provider>
  )
}