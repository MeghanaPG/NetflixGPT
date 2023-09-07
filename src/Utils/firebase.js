// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrb73Ph4TW0fUNLf6G2322-2Y_uebwxY",
  authDomain: "netflixgpt-db8f3.firebaseapp.com",
  projectId: "netflixgpt-db8f3",
  storageBucket: "netflixgpt-db8f3.appspot.com",
  messagingSenderId: "971372203780",
  appId: "1:971372203780:web:255077f74402c710570a51",
  measurementId: "G-PBMD82LSZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
