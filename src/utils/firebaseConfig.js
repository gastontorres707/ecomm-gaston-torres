import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOi2A9VYHl5gu_XPP7DTWXdSABdVxw0r0",
  authDomain: "ecomm-gaston-torres.firebaseapp.com",
  projectId: "ecomm-gaston-torres",
  storageBucket: "ecomm-gaston-torres.appspot.com",
  messagingSenderId: "225259192447",
  appId: "1:225259192447:web:e6781aae2c23c46a71bf4a"
};

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db