import React from "react";
import {initializeApp} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA17fmU7fpNX_rkuhR8Rh7u_kO4fc_4-oo",
  authDomain: "wow-projects-883e4.firebaseapp.com",
  projectId: "wow-projects-883e4",
  storageBucket: "wow-projects-883e4.appspot.com",
  messagingSenderId: "261230143074",
  appId: "1:261230143074:web:2575f732aaef697d33d33b",
  measurementId: "G-GTM75K0PYF"
};

// Initialize Firebase
const AppData = initializeApp(firebaseConfig);
export default AppData;