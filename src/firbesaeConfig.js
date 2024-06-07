// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD41pFhKhziX3_ZjkzDmmRb6DMDS73LNTg",
  authDomain: "portfoliyo-86d9e.firebaseapp.com",
  projectId: "portfoliyo-86d9e",
  storageBucket: "portfoliyo-86d9e.appspot.com",
  messagingSenderId: "395880663844",
  appId: "1:395880663844:web:d37e2a82a8c0bd632781b1",
  measurementId: "G-BSHWMBFJKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)