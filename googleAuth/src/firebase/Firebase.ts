// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOaGOgSufJMXMKBHwZkM-yeLTnvjvE6I8",
  authDomain: "gogle-auth-cc7e4.firebaseapp.com",
  projectId: "gogle-auth-cc7e4",
  storageBucket: "gogle-auth-cc7e4.appspot.com",
  messagingSenderId: "290253570047",
  appId: "1:290253570047:web:048a1820ae23c0c5b8b1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)