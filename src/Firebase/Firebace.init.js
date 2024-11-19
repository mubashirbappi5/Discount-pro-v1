// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCODOhSx4NWlvq2YNkDorhT6xInFh2PnJ8",
  authDomain: "discount-pro-web-bc531.firebaseapp.com",
  projectId: "discount-pro-web-bc531",
  storageBucket: "discount-pro-web-bc531.firebasestorage.app",
  messagingSenderId: "981550276040",
  appId: "1:981550276040:web:d52614eedf6a3c6fbd74fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
