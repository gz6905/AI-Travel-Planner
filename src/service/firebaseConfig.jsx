// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtbdIuyFfJHe12X5BQfxXY4OTSBoe4vkc",
  authDomain: "ai-trip-planner-974ab.firebaseapp.com",
  projectId: "ai-trip-planner-974ab",
  storageBucket: "ai-trip-planner-974ab.firebasestorage.app",
  messagingSenderId: "127507730462",
  appId: "1:127507730462:web:df0536687406ba25dd1e0f",
  measurementId: "G-XQ1NXHERV4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
