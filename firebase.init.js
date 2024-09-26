// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0OAmRpZy7ZPaW-q6iu4jyDNrSMQXeKgE",
    authDomain: "simple-react-firebase-008.firebaseapp.com",
    projectId: "simple-react-firebase-008",
    storageBucket: "simple-react-firebase-008.appspot.com",
    messagingSenderId: "1022512037989",
    appId: "1:1022512037989:web:e13ffb9e50f694654bc68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;