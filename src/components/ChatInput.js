import { useState } from "react";
import { db, auth } from "./FirebaseConfig";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const ChatInput = () => {
    const [currentUser] = useAuthState(auth);

    const SendChat = async (event) => {
        event.preventDefault();

        if (!currentUser) {
            alert("Log eerst in voordat je een bericht kunt versturen");
            return;
        }

        const { uid, displayName, photoURL } = currentUser;

        const messagesRef = collection(db, "messages");
        await addDoc(messagesRef, {
            content: chatContent,
            userUid: uid,
            displayName: displayName,
            photoURL: photoURL,
            timeSent: serverTimestamp()
        });

        setChatContent("");
    }

    const [chatContent, setChatContent] = useState("");

    return (
        <form className="input-group" onSubmit={SendChat}>
            <input type="text"
                value={chatContent} onChange={(e) => setChatContent(e.target.value)}
                className="form-control border-primary" placeholder="Stuur een bericht" required
            />
            <div className="input-group-append">
                <input type="submit" className={"btn btn-lg " + (currentUser ? "btn-outline-primary" : "btn-outline-danger")}
                    value="Versturen"
                    style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", background: "white" }}
                />
            </div>
        </form>
    )
}