import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider=({ children })=>{
    const [cartList, setCartList] = useState([])

    const isInCart=(id)=>{
        return cartList.find(producto=> (producto.id ===id))? true:false;
   }
   
        
    const addItem=(prod,qty)=>{
    if(isInCart(prod.id)){
             setCartList(cartList.map(producto=>{ 
                return producto.id ===prod.id ? {...producto,qty: producto.qty+qty}:producto
                }));
             }else{
               
                setCartList([...cartList,{...prod,qty}])
             }
       
                }

    const clear=()=>{
        setCartList([]) 
    }
    const removeItem=(id)=>{
       setCartList(cartList.filter(producto=>producto.id!==id)) 
    }

    return(
        <CartContext.Provider value={{cartList,addItem,isInCart,removeItem,clear}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;