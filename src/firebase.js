import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // À faire
  apiKey: "AIzaSyAaV25zM5Ea2u-DyMlbDq7EzSMOlh4Lups",
  authDomain: "exercice-firebase-2.firebaseapp.com",
  projectId: "exercice-firebase-2",
  storageBucket: "exercice-firebase-2.appspot.com",
  messagingSenderId: "871773486119",
  appId: "1:871773486119:web:007b1c104efd85bf1da202",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
