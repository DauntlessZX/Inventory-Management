// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7aNrbu68pfZkOezt-synOlwPl7z4pck",
  authDomain: "inventory-management-56ccd.firebaseapp.com",
  projectId: "inventory-management-56ccd",
  storageBucket: "inventory-management-56ccd.appspot.com",
  messagingSenderId: "85004447386",
  appId: "1:85004447386:web:ab26df3eb44764b2f2f923",
  measurementId: "G-86DNXYNPW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
