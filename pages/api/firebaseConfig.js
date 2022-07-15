/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
