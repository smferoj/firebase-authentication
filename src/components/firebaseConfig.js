// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyRn6Th5CLDLirMq26w3hz8JXhZotY-iM",
  authDomain: "fir-project-sm-ebdeb.firebaseapp.com",
  projectId: "fir-project-sm-ebdeb",
  storageBucket: "fir-project-sm-ebdeb.appspot.com",
  messagingSenderId: "985592592899",
  appId: "1:985592592899:web:d4a6e9b921f19f44032c36",
  measurementId: "G-E0FFBPX7YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);