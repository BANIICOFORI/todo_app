// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA7XqRKdyNmaDs8gXS3fdoaY86VuJm_Xc",
  authDomain: "todoapp-fe977.firebaseapp.com",
  projectId: "todoapp-fe977",
  storageBucket: "todoapp-fe977.appspot.com",
  messagingSenderId: "116526523238",
  appId: "1:116526523238:web:9ae63f1585e5afe77b1ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);