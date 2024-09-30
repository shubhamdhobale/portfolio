import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1auJJbPHb4XFLWocvG6DJ-kEKjTgUC5c",
  authDomain: "portfolio-a447b.firebaseapp.com",
  projectId: "portfolio-a447b",
  storageBucket: "portfolio-a447b.appspot.com",
  messagingSenderId: "737085207075",
  appId: "1:737085207075:web:fbe1a216281d1a33dff796",
  measurementId: "G-GHMD3KJDEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)

export {app , fireDB }