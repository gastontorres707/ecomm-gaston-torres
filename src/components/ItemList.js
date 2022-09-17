import React from "react";
import Item from "./Item";

const ItemList = ({ listProductos }) => {
    return (
        <>
            {listProductos.map((producto) => (
                <Item producto={producto} key={producto.id}/>
            ))}
            
        </>


    );
};

export default ItemList