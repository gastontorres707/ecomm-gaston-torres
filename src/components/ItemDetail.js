import React from "react";
import {Link} from "react-router-dom"

const ItemDetail = ({ id, nombre, precio, detail, img }) => {
    return (
        <>
        <div className="card" id={id[1]}>
            <div class="">
                <img src={img}/>
                <h4>{nombre}</h4>
                <p>{detail}</p>
                <Link to={`/item/${producto.id}`}><button>Detalle de Item</button></Link>
            </div>
        </div>
        
        </>
    );
};

export default ItemDetail;