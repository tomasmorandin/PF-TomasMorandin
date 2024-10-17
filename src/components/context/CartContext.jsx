import { createContext, useContext, useState } from "react";


export const CartContext=createContext([]);
export const useCartContext = () =>useContext (CartContext)

export function CartProvider({children}){

    const [cart, setCart]=useState([]);


    const addToCart = ({singleProd, cantidad:quantity})=>{

        const itemAdd = {...singleProd, quantity}

        const newCart = [...cart]

        const isIntoTheCart = newCart.find((prod)=> prod.id === itemAdd.id)

        if(isIntoTheCart){
          
          isIntoTheCart.quantity += quantity;
          
        }else{
          newCart.push(itemAdd)
        }
        setCart(newCart)
        };

          const totalPrice = ()=>{
            return cart.reduce((acc, prod)=> acc + prod.price * prod.quantity, 0);
          } 

          const quantity = ()=>{
            return cart.reduce((acc, prod)=> acc + prod.quantity, 0);
          } 

          const clearCart = ()=>{
            setCart([]);
          }


    return(
        <>
        <CartContext.Provider value={{cart, setCart, addToCart, totalPrice, quantity, clearCart}}>
          {children}
        </CartContext.Provider>
        </>
    )
};

