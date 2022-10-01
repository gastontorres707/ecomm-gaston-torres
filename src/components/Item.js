import React from "react";
import {Link} from "react-router-dom";
function Item({id,nombre,img,precio, detail,stock}){
    return(
        <div className="card" id={id}>
        <div>
            <img src={img} alt={nombre}/>
        </div>
        <div className="card-body">
            <h3 className="card-nombre">{nombre}</h3>
            <p className="card-text">Descripción:{detail}</p>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">Stock: {stock}</p>
            <Link to={`/item/${id}`}><button type="button" > Detalle del producto</button> </Link>
        </div>
        </div>
    )
}
export default Item