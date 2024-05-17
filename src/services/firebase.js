import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChVbvWmQu8DiY-m8mCx9vmFBjLicqadiQ",
    authDomain: "system-pos-4cc4a.firebaseapp.com",
    projectId: "system-pos-4cc4a",
    storageBucket: "system-pos-4cc4a.appspot.com",
    messagingSenderId: "787609523114",
    appId: "1:787609523114:web:40c0af77836f66dc13d1d3",
    measurementId: "G-1M8YXK7JDZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)