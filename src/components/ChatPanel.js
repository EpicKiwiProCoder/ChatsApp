import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { timeAgoPhrase } from "./UserCardPanel";

export const ChatPanel = () => {
    const OwnMessage = (message) => {
        const { content, userUid, timeSent, photoURL, displayName } = message.message;
        return (
            <div className="ownMessage bg-success bg-gradient rounded pt-1 pb-1 ps-2 pe-3">
                <span>
                    <p className="text text-left text-white p-0 m-0 chatContent">
                        {content}
                    </p>
                </span>
                <img className="messageImg ms-3" referrerPolicy="no-referrer" src={photoURL} />
            </div>
        )
    }
    const OtherMessage = (message) => {
        const { content, userUid, timeSent, photoURL, displayName } = message.message;
        return (
            <div className="otherMessage bg-secondary bg-gradient rounded pt-1 pb-1 ps-2 pe-3 ">
                <img className="messageImg me-3" referrerPolicy="no-referrer" src={photoURL} />
                <span>
                    <p className="text text-white fw-bold p-0 m-0">
                        {displayName + ":"}
                    </p>
                    <p className="text text-white p-0 m-0 chatContent">
                        {content}
                    </p>
                </span>
            </div>
        )
    }

    const [messages] = useCollectionData(collection(db, "messages"));
    const currentUser = auth.currentUser;

    return (
        <div>
            {messages && messages.map((message) => {
                if (currentUser && message.userUid == currentUser.uid) {
                    return <div className="messageWrapper"><OwnMessage message={message} /></div>
                } else {
                    return <div className="messageWrapper"><OtherMessage message={message} /></div>
                }
            })}
        </div>
    )
}