import { auth, provider, db } from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth"
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export const Auth = () => {
    const signInGoogle = async () => {
        const logInResult = await signInWithPopup(auth, provider);

        const { uid, photoURL, displayName } = auth.currentUser;

        const usersRef = collection(db, "users");
        await setDoc(doc(usersRef, uid), {
            name: displayName,
            uid: uid,
            photo: photoURL,
            isOnline: true,
            lastOnline: Timestamp.now()
        });
    }

    const signOutGoogle = async () => {
        const { uid } = auth.currentUser;

        const usersRef = collection(db, "users");
        await updateDoc(doc(usersRef, uid), {
            isOnline: false,
            lastOnline: Timestamp.now()
        })

        auth.signOut();
    }

    const [user] = useAuthState(auth);

    if (user) { // User is logged in
        return (
            <div>
                <p>Log Out:</p>
                <button onClick={signOutGoogle} className="btn btn-danger btn-large">Uitloggen</button>
            </div>
        )
    } else { // User isn't logged in
        return (
            <div>
                <p>Log in:</p>
                <button onClick={signInGoogle} className="btn btn-primary btn-large">Inloggen met Google</button>
            </div>
        )
    }

}