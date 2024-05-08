import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDs8MprilJEJOSVMlEMEs51G4PDJ7Sn5mY",
    authDomain: "react-fb-auth-a7974.firebaseapp.com",
    projectId: "react-fb-auth-a7974",
    storageBucket: "react-fb-auth-a7974.appspot.com",
    messagingSenderId: "520581200931",
    appId: "1:520581200931:web:932d1e7af772fd62800596"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)