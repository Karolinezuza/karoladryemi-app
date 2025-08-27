import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyBuLpMWLOToVKQIxRXCPtM4ZXD3VnzSV3w",
  authDomain: "explorar-tour.firebaseapp.com",
  projectId: "explorar-tour",
  storageBucket: "explorar-tour.firebasestorage.app",
  messagingSenderId: "523937342831",
  appId: "1:523937342831:web:1901c50e39b93d0b60749a"
};




const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const auth = getAuth(app);

export { auth }