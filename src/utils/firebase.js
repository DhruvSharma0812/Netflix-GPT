// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwEFkK6UTgI-Dzcf4Z7ZCCaa4B67Re3kU",
  authDomain: "netflixgpt-e3fe0.firebaseapp.com",
  projectId: "netflixgpt-e3fe0",
  storageBucket: "netflixgpt-e3fe0.appspot.com",
  messagingSenderId: "13849167272",
  appId: "1:13849167272:web:fac7bb065f8f50cd05099d",
  measurementId: "G-EC622N20PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()