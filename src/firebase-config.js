import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBJieZTQDk2eD4FmuFkNxlDuyrsjwC7R-s",
    authDomain: "chatsapp-8141c.firebaseapp.com",
    projectId: "chatsapp-8141c",
    storageBucket: "chatsapp-8141c.appspot.com",
    messagingSenderId: "571055643127",
    appId: "1:571055643127:web:71f96dc9152c9124b2b6f2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 