import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Un5cuQUhSfRABfIwToUhOwE2CXPHP7A",
  authDomain: "auth-dragon-16862.firebaseapp.com",
  projectId: "auth-dragon-16862",
  storageBucket: "auth-dragon-16862.appspot.com", // Fixed incorrect storage URL
  messagingSenderId: "678901285590",
  appId: "1:678901285590:web:3ce09fa31f4eac0a7bbf77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
