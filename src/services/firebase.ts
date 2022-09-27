import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtN79qoEPl8FOeYUqIw_Xw0CbPKODH1YY",
  authDomain: "auth-9481a.firebaseapp.com",
  projectId: "auth-9481a",
  storageBucket: "auth-9481a.appspot.com",
  messagingSenderId: "1054911860946",
  appId: "1:1054911860946:web:379fe4a0588fc64c8a9d0b",
  measurementId: "G-1GRM0SSDVX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
