// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxM4ahzobGawX2mGvc-YSWtRRoFH2ZFro",
  authDomain: "e-learning-29f0a.firebaseapp.com",
  projectId: "e-learning-29f0a",
  storageBucket: "e-learning-29f0a.appspot.com",
  messagingSenderId: "1041468166258",
  appId: "1:1041468166258:web:30fa62e05926c6e98472eb",
  measurementId: "G-6V36C971KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}