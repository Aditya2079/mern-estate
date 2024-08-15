// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14e79.firebaseapp.com",
  projectId: "mern-estate-14e79",
  storageBucket: "mern-estate-14e79.appspot.com",
  messagingSenderId: "886367364148",
  appId: "1:886367364148:web:182b136b6770485c769661"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);