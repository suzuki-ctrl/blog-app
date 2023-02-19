// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArQgeu8yNkpho1J_HTls05_qlmZY9-IK4",
  authDomain: "my-blog-c3bd0.firebaseapp.com",
  projectId: "my-blog-c3bd0",
  storageBucket: "my-blog-c3bd0.appspot.com",
  messagingSenderId: "548570182999",
  appId: "1:548570182999:web:89a3f9cd1f26b5b0223a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };