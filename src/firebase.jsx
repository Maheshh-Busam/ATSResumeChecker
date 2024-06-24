import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgg7PyCm-xY1KCM8XRxP8psVzUvD6FJdU",
    authDomain: "ats-resume-checker.firebaseapp.com",
    projectId: "ats-resume-checker",
    storageBucket: "ats-resume-checker.appspot.com",
    messagingSenderId: "793556829866",
    appId: "1:793556829866:web:210f1ce72eb6682f7fb2d3",
    measurementId: "G-R0R3R4N45P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
