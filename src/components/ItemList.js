import React from 'react'
import Item from './Item.js';

function ItemList ({data}){
    return (
       <div id="itemList">
       {data.map(product=>(< Item key= {product.id}
        id={product.id}
        nombre={product.nombre}
        img={product.img}
          detail={product.detail}
          precio={product.precio}/>
))}
</div>
    );
}
export default ItemList