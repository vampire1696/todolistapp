// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIHxW4AH0jQ-_W1o1wYfPBoj2uvGFmHbI",
  authDomain: "todo-list-a4588.firebaseapp.com",
  projectId: "todo-list-a4588",
  storageBucket: "todo-list-a4588.appspot.com",
  messagingSenderId: "1011603685608",
  appId: "1:1011603685608:web:1cf7b2ef49e1710bde895d",
  measurementId: "G-72CJ0567NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
