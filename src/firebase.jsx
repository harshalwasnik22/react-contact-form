import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA8a83us4L0Zjhvm6jS5zWz4waDvCcLPmM",
    authDomain: "react-contact-form-3557c.firebaseapp.com",
    projectId: "react-contact-form-3557c",
    storageBucket: "react-contact-form-3557c.appspot.com",
    messagingSenderId: "719643890373",
    appId: "1:719643890373:web:2629a4d8fd3118a1a096ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export {db};