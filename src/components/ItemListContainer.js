import React from 'react';
import productos from './productos'
import { customFetch } from './customFetch'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [listProductos, setListProductos] = useState ([]);
    const { id } = useParams ();

    useEffect(() => {
        if (id) {
            customFetch(productos.filter(item => item.categoryId == id))
            .then(data=> setListProductos(data)) 

        } else {
            customFetch(productos)
            .then(data=> setListProductos(data)) 
        }

    },[id])

    return (
    <>
        <div><ItemList listProductos={listProductos}/></div>
    </>)
}

export default ItemListContainer