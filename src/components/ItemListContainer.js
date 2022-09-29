import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (category) {
        const q = query(collection(db, "productos"), where("categoryId", "==", category));
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setData(dataFromFirestore);
      } else {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setData(dataFromFirestore);
      }
    }
    fetchData();
  }, [category]);

  return <ItemList items={data} />;
};
export default ItemListContainer;