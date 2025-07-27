import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, setPersistence } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDQFUQwvp9wozLmSYIFdc8bagraCsN8T9o",
  authDomain: "login-test-fd72a.firebaseapp.com",
  projectId: "login-test-fd72a",
  storageBucket: "login-test-fd72a.firebasestorage.app",
  messagingSenderId: "106769796114",
  appId: "1:106769796114:web:a5c8b97f519fa1f1139ccb",
  measurementId: "G-YFN3851T3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

export { auth, googleProvider };