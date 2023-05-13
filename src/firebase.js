import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPIJWfv_gnB7ujsaphNlkz1IHlN5AHYi4",
    authDomain: "eshop-34f75.firebaseapp.com",
    projectId: "eshop-34f75",
    storageBucket: "eshop-34f75.appspot.com",
    messagingSenderId: "345819192325",
    appId: "1:345819192325:web:84045e7fb397518353906c",
    measurementId: "G-GCHL98H78P"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export {db, auth};