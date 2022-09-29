import { useState } from "react"
const ItemCount=({initial,stock,onAdd})=>{
const [itemCount,setItemCount]=useState(initial) 
const sumar=()=>{
    setItemCount(itemCount +1)
} 
const restar=()=>{
   setItemCount(itemCount -1)
} 


    return (
      <>
      <button type="button" class="btn btn-light" id="mas" onClick= {()=>sumar()} > + </button>
      <span> {itemCount} </span>
      <button type="button" class="btn btn-light" id="menos" onClick= {()=>restar()} >  - </button>
      <button type="button" class="btn btn-info btn-lg" onClick= {()=>onAdd(itemCount)}>  Agregar al carrito </button>  
      </>
    );
}
  
export default ItemCount;