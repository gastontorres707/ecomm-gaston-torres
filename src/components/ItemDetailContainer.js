import React,{ useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { getDoc,doc } from "firebase/firestore";


const ItemDetailContainer=() =>{
    const[data,setData]=useState({});
    const {id}= useParams();
    
     useEffect(() =>{
      
     async function getProduct(){
const docSnap=await getDoc(doc(db,"productos",id))
const producto={id: id, ...docSnap.data()}
  setData(producto)   }
  getProduct()   },[id]);
  
    return (  <>
    
      <ItemDetail product={data}/>
       </>
     );
   }
 export default ItemDetailContainer;