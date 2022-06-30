import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app"

let app = FirebaseApp

const firebaseConfig = {
  apiKey: "AIzaSyB35eDmOSwBBDp7Z0Af6yhjulL9Bh_SkyI",
  authDomain: "invertramites-db.firebaseapp.com",
  projectId: "invertramites-db",
  storageBucket: "invertramites-db.appspot.com",
  messagingSenderId: "391620903293",
  appId: "1:391620903293:web:157aa309a3f16623404c14",
  measurementId: "G-F36KSFZHM7",
};

if(getApps().length) {
  app = getApp()
} else {
  initializeApp(firebaseConfig)
}



export default app;
