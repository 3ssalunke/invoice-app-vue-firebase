import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfD38PFRfB283IypBcYiPV6Wq7KrcQ6XM",
  authDomain: "invoiceapp-in-vue.firebaseapp.com",
  projectId: "invoiceapp-in-vue",
  storageBucket: "invoiceapp-in-vue.appspot.com",
  messagingSenderId: "661050274893",
  appId: "1:661050274893:web:1902782707745ea26e9804",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
