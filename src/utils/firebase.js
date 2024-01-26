// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA2Akkv08sDisnpAwSk-cqzFayf_hIsg8",
  authDomain: "nfxgpt.firebaseapp.com",
  projectId: "nfxgpt",
  storageBucket: "nfxgpt.appspot.com",
  messagingSenderId: "477630444005",
  appId: "1:477630444005:web:7c82641fe64afc96caff0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

//npm install -g firebase-tools     
//firebase login
//firebase init
//When you're ready, deploy your web app
//Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
//firebase deploy
//After deploying, view your app at nfxgpt.web.app