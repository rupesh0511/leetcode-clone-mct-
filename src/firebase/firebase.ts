// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR3rWSTekmZw_bsbC-RT74nhxrjtvKEG0",
  authDomain: "leet-65e9f.firebaseapp.com",
  projectId: "leet-65e9f",
  storageBucket: "leet-65e9f.appspot.com",
  messagingSenderId: "570321816615",
  appId: "1:570321816615:web:8a74a105f2af692938d202"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth=getAuth(app);
const firestore=getFirestore(app);

export { auth, firestore, app};