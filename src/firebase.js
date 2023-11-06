import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuxvjvQRde4sFV8kmxR2aHGlvX8aUteE4",
  authDomain: "budget-calculator-auth.firebaseapp.com",
  projectId: "budget-calculator-auth",
  storageBucket: "budget-calculator-auth.appspot.com",
  messagingSenderId: "179065838216",
  appId: "1:179065838216:web:3b6df6060f7a2874461d3d",
  measurementId: "G-S1DN4QHVWH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
