// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcDzHru5N3ntOZ918VjNfqVblf0VFCo_s",
  authDomain: "chat-app-1ffcf.firebaseapp.com",
  projectId: "chat-app-1ffcf",
  storageBucket: "chat-app-1ffcf.firebasestorage.app",
  messagingSenderId: "777557715604",
  appId: "1:777557715604:web:5384189b35002bf2fd6281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
