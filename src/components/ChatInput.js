import { useState } from "react";
import { db, auth } from "../firebase-config";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

export const ChatInput = () => {
    const SendChat = async (event) => {
        event.preventDefault();

        const { uid } = auth.currentUser;

        const messagesRef = collection(db, "messages");
        await addDoc(messagesRef, {
            content: chatContent,
            userUid: uid,
            timeSent: serverTimestamp()
        });

        setChatContent("");
    }

    const [chatContent, setChatContent] = useState("");

    return (
        <div>
            <form className="input-group" onSubmit={SendChat}>
                <input type="text"
                    value={chatContent} onChange={(e) => setChatContent(e.target.value)}
                    className="form-control" placeholder="Stuur een bericht" required
                />
                <div className="input-group-append">
                    <input type="submit" className="btn btn-outline-primary"
                        value="Versturen"
                        style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
                    />
                </div>
            </form>
        </div>
    )
}