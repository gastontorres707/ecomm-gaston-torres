import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import productos from './productos.js';
import { useParams } from "react-router-dom";

const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
    const {id}= useParams();
    const customFetch=(productos)=>{
      return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(id){
      resolve(productos.find((item)=>item.id==id));
    }else resolve(productos);
    },2000);
    });
    }; 
     useEffect(() =>{
      customFetch(productos)
      .then((data)=> setData(data))
     },[id]);
  
    return (  <>
    
      <ItemDetail product={data}/>
       </>
     );
   }
 export default ItemDetailContainer;