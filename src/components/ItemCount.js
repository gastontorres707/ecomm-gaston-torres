import { useState } from 'react'

const ItemCount = ({initial, stock}) => {

    const [ItemCount, setCount] = useState(initial)

    const sumar = () => {
        if (ItemCount < stock) {
        setCount(ItemCount + 1) }
    }

    const restar = () => {
        if (ItemCount > initial) {
        setCount(ItemCount - 1) }
    }

    const agregarAlCarro = () =>
    {
        setCount(ItemCount)
        alert("Se agrego al carrito")
    }

    return (
        <>
        <button type="button" class="btn btn-light" id="mas" onClick={()=> sumar()}> + </button>
        <button type="button" class="btn btn-light" id="menos" onClick={()=> restar()}> - </button>
        <span>{ItemCount}</span>
        <button type="button" class="btn btn-info btn-lg" onClick={()=> agregarAlCarro()}>Agregar al carrito</button>
        </>
    )       
}


export default ItemCount