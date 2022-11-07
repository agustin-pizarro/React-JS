import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnv6icPX1qW9J9tOBNOW7Gvb7d9XhMEs0",
  authDomain: "backend34780-f2092.firebaseapp.com",
  projectId: "backend34780-f2092",
  storageBucket: "backend34780-f2092.appspot.com",
  messagingSenderId: "94424972121",
  appId: "1:94424972121:web:1e12e7a9d9b42b2d582a48"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)