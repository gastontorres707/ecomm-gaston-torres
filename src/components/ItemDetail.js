import React from "react";
import ItemCount from "./ItemCount.js"

function ItemDetail({producto}){
    return(
        
        < div className="detail" id={producto.id} style={{width: '1,5 rem'}}>
<div>
    <img src={producto.img} className="detail-img-top" alt={producto.nombre}/>
    </div>
    <div className="detail-body">
<h3 className="detail-title">{producto.nombre}</h3>
<p className="detail-text">Descripción:{producto.detail}</p>
<p className="detail-text">Precio:{producto.precio}</p>
<ItemCount initial={1} stock={10}/>
</div>
        
   </div>
   )
}
export default ItemDetail