import React from "react";
import ItemCount from "./ItemCount.js"
import { Link } from "react-router-dom"
import { useState } from 'react'

const ItemDetail = ({producto}) => {
    const [countItem,setItemCount]= useState(0);

    const onAdd=(count)=>{
        alert('Has seleccionado' + " productos.")
        setItemCount(count)
    }
    return(
        
        <div className="detail" id={producto.id} style={{width: '1,5 rem'}}>
            <div>
                <img src={producto.img} className="detail-img-top" alt={producto.nombre}/>
            </div>
            <div className="detail-body">
                <h3 className="detail-title">{producto.nombre}</h3>
                <p className="detail-text">Descripción:{producto.detail}</p>
                <p className="detail-text">Precio:{producto.precio}</p>
            </div>
            <div className="count">
                { countItem===0
                ? <ItemCount stock={producto.stock} initial={countItem} onAdd={onAdd}></ItemCount>
                : <Link to='/Cart' style={{textDecoration:"none"}}><button class="btn btn-info" type="button">Check Out</button> </Link>
                }     
            </div>
        </div>
    )
}
export default ItemDetail