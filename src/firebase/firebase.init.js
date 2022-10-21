// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBekNE8FXsatf86GVudFrWGgb4jGe7SYcQ",
  authDomain: "email-password-auth-d9d0c.firebaseapp.com",
  projectId: "email-password-auth-d9d0c",
  storageBucket: "email-password-auth-d9d0c.appspot.com",
  messagingSenderId: "1030069225781",
  appId: "1:1030069225781:web:1f6928d331ff7419c4e47c",
  measurementId: "G-29SZR7DYGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; 