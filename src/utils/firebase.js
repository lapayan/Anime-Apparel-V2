// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCavX7sVV4OKKS0THuDPjolNPtD8RW0fZE",
  authDomain: "anime-shop-fec20.firebaseapp.com",
  projectId: "anime-shop-fec20",
  storageBucket: "anime-shop-fec20.appspot.com",
  messagingSenderId: "82425966691",
  appId: "1:82425966691:web:7dc791115415e8e33bc856",
  measurementId: "G-ZWGGWDT791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);