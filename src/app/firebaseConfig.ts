// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjwvPoAy5Gk8ibsJwAHo4F37tf4YTropc",
  authDomain: "music-project-6a149.firebaseapp.com",
  databaseURL: "https://music-project-6a149-default-rtdb.firebaseio.com",
  projectId: "music-project-6a149",
  storageBucket: "music-project-6a149.firebasestorage.app",
  messagingSenderId: "108309453517",
  appId: "1:108309453517:web:3168bc4fd605793572e784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase=getDatabase(app);
export const authFirebase=getAuth(app);