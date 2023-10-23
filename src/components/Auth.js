import { auth, provider, db } from "./firebaseConfig.js"
import { signInWithPopup } from "firebase/auth"
import 'firebase/compat/firestore';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

export const SignIn = () => {
    const signInGoogle = async () => {
        await signInWithPopup(auth, provider);

        const { uid, photoURL, displayName, email } = auth.currentUser;

        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
            displayName: displayName,
            photoURL: photoURL,
            email: email,
            isOnline: true,
            lastOnline: serverTimestamp()
        });
    }

    return (
        <button onClick={signInGoogle} className="btn btn-primary btn-lg btn-block w-100 mt-3 mb-3">Inloggen met Google</button>
    )
}

export const SignOut = () => {
    const signOutGoogle = async () => {
        const { uid } = auth.currentUser;

        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
            isOnline: false,
            lastOnline: serverTimestamp()
        })

        auth.signOut();
    }

    return (
        <button onClick={signOutGoogle} className="btn btn-danger btn-lg w-100 mt-0 mb-3">Uitloggen</button>
    )
}