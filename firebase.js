

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB35eDmOSwBBDp7Z0Af6yhjulL9Bh_SkyI",
  authDomain: "invertramites-db.firebaseapp.com",
  projectId: "invertramites-db",
  storageBucket: "invertramites-db.appspot.com",
  messagingSenderId: "391620903293",
  appId: "1:391620903293:web:157aa309a3f16623404c14",
  measurementId: "G-F36KSFZHM7"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db

