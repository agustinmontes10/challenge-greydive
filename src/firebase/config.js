// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7LIuUSWU61qe9Fhwv5ZM_nsrabcZ_uXU",
  authDomain: "challenge-greydive-a4c78.firebaseapp.com",
  projectId: "challenge-greydive-a4c78",
  storageBucket: "challenge-greydive-a4c78.appspot.com",
  messagingSenderId: "141764915293",
  appId: "1:141764915293:web:6e72288a12a3ad163d5db4",
  measurementId: "G-NBF4QE72XZ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const firebaseDB = getFirestore( firebaseApp );