import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import productos from './productos.js';

const ItemListContainer=() =>{
   const[data,setData]=useState([]);
   const {id}= useParams()
   const customFetch=(productos)=>{
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(id){
    resolve(productos.filter((item)=>item.categoryId==id));
  }else resolve(productos);
  },2000);
  });
  }; 
   useEffect(() =>{
    customFetch(productos)
    .then((data)=> setData(data))
   },[id]);
 
  
   return (  <>
     <ItemList data={data}/>
      </>
    );
   }
export default ItemListContainer;