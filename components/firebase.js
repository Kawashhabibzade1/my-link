/** @format */

import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";
import firestore from "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDHkpgznyrMIjDI_KD2aX7ea86iLWG0YMc",
  authDomain: "linden-clone.firebaseapp.com",
  databaseURL: "https://linden-clone-default-rtdb.firebaseio.com",
  projectId: "linden-clone",
  storageBucket: "linden-clone.appspot.com",
  messagingSenderId: "327418947875",
  appId: "1:327418947875:web:4684dd4b96cee758af0496",
  measurementId: "G-PWR2V1BDNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth1 = firebaseApp.auth();
export { db, auth };
