// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIiNgwdDe_W8kATr4KzF6rl1UfttUbnEc",
  authDomain: "netflixgpt-3ef75.firebaseapp.com",
  projectId: "netflixgpt-3ef75",
  storageBucket: "netflixgpt-3ef75.firebasestorage.app",
  messagingSenderId: "275117622541",
  appId: "1:275117622541:web:470c6513c3dd86a4a29c44",
  measurementId: "G-G7N5V1MYLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();