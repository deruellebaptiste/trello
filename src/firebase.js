// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0Em0CbVymJXTEjXGH54TqwEFrTop5Myc",
    authDomain: "trello-7d063.firebaseapp.com",
    projectId: "trello-7d063",
    storageBucket: "trello-7d063.appspot.com",
    messagingSenderId: "849462481116",
    appId: "1:849462481116:web:c0b9acdd7f1e3eb600e419",
    measurementId: "G-FZ5DGNRLVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);