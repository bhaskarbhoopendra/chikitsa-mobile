import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
console.log("aytg", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTED_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_GRID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
