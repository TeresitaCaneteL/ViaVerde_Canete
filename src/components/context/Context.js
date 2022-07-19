import React, {useState, createContext } from 'react';


export const CartContext = createContext({})

const {Provider}=CartContext

export const CartProvider = ({defaultValue = [], children}) =>{
  const [cart, setCart]=useState(defaultValue);

  const clearCart=()=>{
    setCart([]);
  }


  const addCart = (newItem, quantity) => {
    if(isInCart(newItem.id)){
      const newCart =[...cart]
      for(const e of newCart){
        if(e.newItem.id === newItem.id){
         e.quantity=e.quantity += quantity

        }
      }
      setCart(newCart)
    }else{
      setCart(

        [...cart,{"newItem":newItem, "quantity":quantity}]

      )

    }
    console.log(cart)

};

const isInCart = (id) =>{
  return cart.find(item => item.newItem.id === id)
}

const removeCart = (id) =>{
  const newCart= [...cart].filter(e => e.newItem.id !== id)
  setCart(newCart)
}
function deleteItem({ id }) {
  setCart(prevCart => {
    return prevCart.filter(item => item.id !== id)
  })

}
  const context = {
    clearCart,
    addCart,
    cart,
    isInCart,
   removeCart,
   deleteItem
  }

  return(
    <Provider value={context}>
      {children}
    </Provider>
  )
}