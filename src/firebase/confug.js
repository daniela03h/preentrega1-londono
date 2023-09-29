import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB32CI0xGdqicMT9D8mtFFx_NXX8FvIodg",
  authDomain: "tutienda-450f4.firebaseapp.com",
  projectId: "tutienda-450f4",
  storageBucket: "tutienda-450f4.appspot.com",
  messagingSenderId: "380910810360",
  appId: "1:380910810360:web:7f973fbf4df64fce43370d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
