// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK-yoB3WQzR76bYnPd9AvY1c0NsBuMxh4",
  authDomain: "my-health-aid.firebaseapp.com",
  projectId: "my-health-aid",
  storageBucket: "my-health-aid.firebasestorage.app",
  messagingSenderId: "722966781025",
  appId: "1:722966781025:web:ebc34c877f6699b5521e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

