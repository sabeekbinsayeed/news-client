// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuY8EfTZMQ2zmMMxhg7HnwyLsJIDftFus",
    authDomain: "news-df51d.firebaseapp.com",
    projectId: "news-df51d",
    storageBucket: "news-df51d.appspot.com",
    messagingSenderId: "881937936191",
    appId: "1:881937936191:web:aedfda15cff2f0c6faad8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;