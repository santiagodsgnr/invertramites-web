// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB35eDmOSwBBDp7Z0Af6yhjulL9Bh_SkyI",
  authDomain: "invertramites-db.firebaseapp.com",
  projectId: "invertramites-db",
  storageBucket: "invertramites-db.appspot.com",
  messagingSenderId: "391620903293",
  appId: "1:391620903293:web:157aa309a3f16623404c14",
  measurementId: "G-F36KSFZHM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);