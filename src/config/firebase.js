import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  // projectId: process.env.REACT_APP_FIREBASE_projectId,
  // storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBASE_appId,
  // measurementId: process.env.REACT_APP_FIREBASE_measurementId,

  apiKey: "AIzaSyCzkPlXsHVOOwj9Ms6tKc1XnRcJsqE4maw",
  authDomain: "study-notes-app-f5be9.firebaseapp.com",
  projectId: "study-notes-app-f5be9",
  storageBucket: "study-notes-app-f5be9.firebasestorage.app",
  messagingSenderId: "810704567864",
  appId: "1:810704567864:web:4f939699170191b58fb0cd"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { auth, analytics, firestore, storage }

