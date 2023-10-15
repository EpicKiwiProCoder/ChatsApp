import { auth, provider, db } from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth"
import 'firebase/compat/firestore';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

export const SignIn = () => {
    const signInGoogle = async () => {
        await signInWithPopup(auth, provider);

        const { uid, photoURL, displayName } = auth.currentUser;

        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
            name: displayName,
            photo: photoURL,
            isOnline: true,
            lastOnline: serverTimestamp()
        });
    }

    return (
        <div>
            <p>Log in:</p>
            <button onClick={signInGoogle} className="btn btn-primary btn-large">Inloggen met Google</button>
        </div>
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
        <div>
            <p>Log Out:</p>
            <button onClick={signOutGoogle} className="btn btn-danger btn-large">Uitloggen</button>
        </div>
    )
}