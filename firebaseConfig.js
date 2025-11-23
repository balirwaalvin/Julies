import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPLuUZxz4X0HHBQVnNdOj5dX4ME5VjgQU",
  authDomain: "studio-1547374427-988ed.firebaseapp.com",
  projectId: "studio-1547374427-988ed",
  databaseURL: "https://studio-1547374427-988ed-default-rtdb.firebaseio.com",
  storageBucket: "studio-1547374427-988ed.firebasestorage.app",
  messagingSenderId: "1000508827754",
  appId: "1:1000508827754:web:bbfecddaa5b4ba7adfc213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
