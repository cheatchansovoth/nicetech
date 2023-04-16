// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GoogleAuthProviderG,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoOCXjevJhOoQEvm0h8-bZ9msdbeHYQqc",
  authDomain: "nicetech-c4721.firebaseapp.com",
  projectId: "nicetech-c4721",
  storageBucket: "nicetech-c4721.appspot.com",
  messagingSenderId: "655693285035",
  appId: "1:655693285035:web:caac9a5ba6dd3b20ce19ee",
  measurementId: "G-38JQ05JRBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleAuth = new GoogleAuthProvider();
