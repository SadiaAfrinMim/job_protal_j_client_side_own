// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADH2i01QRSJjUaFNT7aFY8Zgax9swuY9o",
  authDomain: "module---51-a.firebaseapp.com",
  projectId: "module---51-a",
  storageBucket: "module---51-a.firebasestorage.app",
  messagingSenderId: "705175104669",
  appId: "1:705175104669:web:9fd8cfdfd501ab10e07874"
};
console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);