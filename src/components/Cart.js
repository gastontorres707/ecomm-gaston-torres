import { useContext } from "react"
import { CartContext } from "./CartContext";
const Cart=()=>{
  const ctx=  useContext(CartContext);
    return(
        <>
        <div className="carts">
        <div className="cart">
            <h2> Carrito</h2>
            <table className="table table-hover m-0 cartCenter">
        <button onClick={ctx.clear}>Eliminar todos los productos</button>
        {
            ctx.cartList.map(producto=> 
                 <div className="cartItem">
            <tr className="detail" >
                <td>
                <img src={producto.img} className="detail-img-top" alt={producto.nombre}/>
                </td>
            <td className="detail-title">{producto.title}</td>  
            <td className="detail-text">Precio: {producto.precio}</td>
            <button onClick={()=>ctx.removeItem(producto.id)}>Eliminar producto</button></tr> </div>)
            }
         </table>
        </div>
         </div>
        
        </>
    )
}
export default Cart