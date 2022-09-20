import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import productos from './productos'
import { useParams } from "react-router-dom";

const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
    const {id}= useParams();

    const customFetch=(productos)=>{
      return new Promise((resolve,reject)=>{

    setTimeout(()=>{
      if(id){
      resolve(productos.find((productos)=>productos.categoryId==id));
    }else resolve(productos);
    },2000);
    });
    }; 

    useEffect(() =>{
      customFetch(productos)
      .then((data)=> setData(data))
     },[id]);
  
    return (  <>
    
      <ItemDetail producto={data}/>
       </>
     );
   }
 export default ItemDetailContainer;