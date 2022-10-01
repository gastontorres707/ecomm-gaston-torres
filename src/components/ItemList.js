import React from 'react'
import Item from './Item.js';

function ItemList ({items}){
    return (
       <div id="itemList">
       {items.map(product=>(< Item key= {product.id}
        id={product.id}
        nombre={product.nombre}
        img={product.img}
          detail={product.detail}
          precio={product.precio}
          stock={product.stock}/>
))}
</div>
    );
}
export default ItemList