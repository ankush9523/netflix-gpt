// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaZ5oxowDYLHMBzWUt6AEgepZ3B7F80MI",
  authDomain: "netflixgpt-f185d.firebaseapp.com",
  projectId: "netflixgpt-f185d",
  storageBucket: "netflixgpt-f185d.appspot.com",
  messagingSenderId: "118172223528",
  appId: "1:118172223528:web:ed34230f59db8d4c654d1d",
  measurementId: "G-EJXFF96VE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();