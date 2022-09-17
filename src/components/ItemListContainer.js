import React from 'react';
import productos from './productos'
import { customFetch } from './customFetch'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const [listProductos, setListProductos] = useState ([])

    useEffect(() => {
        customFetch(productos)
        .then(data=> setListProductos(data)) 

    },[])

    return (
    <>
        <div><ItemList listProductos={listProductos}/></div>
    </>)
}

export default ItemListContainer