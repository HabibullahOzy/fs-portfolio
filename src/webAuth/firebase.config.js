// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_App_apiKey,
  authDomain: process.env.REACT_App_authDomain,
  projectId: process.env.REACT_App_projectId,
  storageBucket: process.env.REACT_App_storageBucket,
  messagingSenderId: process.env.REACT_App_messagingSenderId,
  appId: process.env.REACT_App_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;