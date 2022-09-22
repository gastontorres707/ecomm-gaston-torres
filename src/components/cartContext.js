import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=()=>{
    const [cartList,setCartList]= useState(['hola'])
    const addItem=(producto,qty)=>{
        setCartList([producto])
    }
    return(
        <CartContext.Provider value={cartList}>
        </CartContext.Provider>
    )
}
export default CartContextProvider