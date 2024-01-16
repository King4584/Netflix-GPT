// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB39zLr6SS2Zecr1HSSTq_8wYpz9AGicU4",
  authDomain: "netflix-gpt-6935b.firebaseapp.com",
  projectId: "netflix-gpt-6935b",
  storageBucket: "netflix-gpt-6935b.appspot.com",
  messagingSenderId: "10603452185",
  appId: "1:10603452185:web:79dae766e995539b585788",
  measurementId: "G-T9CXE4DDS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);