// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkNgYVWkJfiDbCJfu4na4DDPk61KFCUno",
  authDomain: "netflix-gpt-44802.firebaseapp.com",
  projectId: "netflix-gpt-44802",
  storageBucket: "netflix-gpt-44802.firebasestorage.app",
  messagingSenderId: "654931907314",
  appId: "1:654931907314:web:10060d59e31b72e546766b",
  measurementId: "G-8JMQGDDDRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();