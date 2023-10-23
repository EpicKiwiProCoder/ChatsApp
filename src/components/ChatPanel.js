import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, getDoc, query, orderBy } from "firebase/firestore";
import { db, auth } from "./FirebaseConfig";
import { timeAgoPhrase } from "./UserCardPanel";

export const ChatPanel = () => {
    const OwnMessage = (message) => {
        const { content, userUid, timeSent, photoURL, displayName } = message.message;
        return (
            <div className="message ownMessage">
                <span className="bg-success bg-gradient rounded pt-1 pb-1 ps-3 pe-2 mt-2 mb-1">
                    <span>
                        <p className="text text-left text-white m-0">
                            {content}
                        </p>
                    </span>
                    <img className="ms-3" referrerPolicy="no-referrer" src={photoURL} />
                </span>
            </div>
        )
    }
    const OtherMessage = (message) => {
        const { content, userUid, timeSent, photoURL, displayName } = message.message;
        return (
            <div className="message otherMessage">
                <span className="bg-secondary bg-gradient rounded pt-1 pb-1 ps-2 pe-3 mt-2 mb-1">
                    <img className="me-3" referrerPolicy="no-referrer" src={photoURL} />
                    <span>
                        <p className="text text-white p-0 m-0 nameBadge">
                            {displayName + ":"}
                        </p>
                        <p className="text text-white p-0 m-0">
                            {content}
                        </p>
                    </span>
                </span>
            </div>
        )
    }

    const [messages] = useCollectionData(query(collection(db, "messages"), orderBy("timeSent")));
    const [currentUser] = useAuthState(auth);

    return (
        <div className="p-0">
            {messages && messages.map((message) => {
                if (currentUser && message.userUid == currentUser.uid) {
                    return <OwnMessage message={message} />
                } else {
                    return <OtherMessage message={message} />
                }
            })}
        </div>
    )
}