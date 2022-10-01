import React from "react";
import ItemCount from "./ItemCount.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function ItemDetail({product}){
    const [countItem,setItemCount]= useState(0);
    const ctx=  useContext(CartContext);
    const onAdd=(quantity)=>{
        setItemCount(quantity)
        ctx.addItem(product,quantity);
    }
    return(
        
    <div className="detail" id={product.id} style={{width: '1,5 rem'}}>
    <div>
        <img src={product.img} className="detail-img-top" alt={product.nombre}/>
    </div>
    <div className="detail-body">
        <h3 className="detail-nombre">{product.nombre}</h3>
        <p className="detail-text">Descripción:{product.detail}</p>
        <p className="detail-text">Precio: ${product.precio}</p>
        <p className="detail-text">Stock: {product.stock}</p>
        < div className="count">
        { countItem===0
        ? <ItemCount initial={countItem} stock={product.stock} onAdd={onAdd}></ItemCount>
        : <Link to='/cart' style={{textDecoration:"none"}}><button type="button"> Carrito</button> </Link>
        }
   </div>
   </div>
        
   </div>
   )
}
export default ItemDetail