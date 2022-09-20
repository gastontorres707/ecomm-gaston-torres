import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import productos from './productos'

const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
   const customFetch=(productos)=>{
     return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(productos);
   },2000);
   });
   }; 
   
   useEffect(() =>{
     customFetch(productos[2])
     .then((data)=> setData(data))
    },[]);
  
    return (  <>
    
      <ItemDetail producto={data}/>
       </>
     );
   }
 export default ItemDetailContainer;