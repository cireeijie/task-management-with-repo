// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJrXzqmyCuoBvUddcejLYj8X2JUztpuJc",
  authDomain: "task-management-with-repo.firebaseapp.com",
  projectId: "task-management-with-repo",
  storageBucket: "task-management-with-repo.appspot.com",
  messagingSenderId: "145162810977",
  appId: "1:145162810977:web:79aa12d1d8f809e9abdc20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
