// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuLpMWLOToVKQIxRXCPtM4ZXD3VnzSV3w",
  authDomain: "explorar-tour.firebaseapp.com",
  projectId: "explorar-tour",
  storageBucket: "explorar-tour.firebasestorage.app",
  messagingSenderId: "523937342831",
  appId: "1:523937342831:web:1901c50e39b93d0b60749a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }
