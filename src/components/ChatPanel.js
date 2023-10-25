import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy } from "firebase/firestore";
import { db, auth } from "./FirebaseConfig";

export const ChatPanel = () => {
    const OwnMessage = (props) => {
        const { content, photoURL } = props.message;
        return (
            <div className="message ownMessage">
                <span className={"bg-success bg-gradient rounded pt-1 pb-1 ps-3 pe-2" + (props.margin ? " mt-4" : " mt-0")}>
                    <span>
                        <p className="text text-left text-white m-0">
                            {content}
                        </p>
                    </span>
                    <img className="ms-3" referrerPolicy="no-referrer" src={photoURL} alt="" />
                </span>
            </div>
        )
    }
    const OtherMessage = (props) => {
        const { content, photoURL, displayName } = props.message;
        return (
            <div className="message otherMessage">
                <span className={"bg-secondary bg-gradient rounded pt-1 pb-1 ps-2 pe-3" + (props.margin ? " mt-4" : " mt-0")}>
                    <img className="me-3" referrerPolicy="no-referrer" src={photoURL} alt="" />
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

    let previousUid = null;

    return (
        <div className="p-0">
            {messages && messages.map((message) => {

                if (currentUser && message.userUid === currentUser.uid) {
                    if (previousUid === message.userUid) {
                        previousUid = message.userUid;
                        return <OwnMessage message={message} margin={false} />
                    } else {
                        previousUid = message.userUid;
                        return <OwnMessage message={message} margin={true} />
                    }

                } else {
                    if (previousUid === message.userUid) {
                        previousUid = message.userUid;
                        return <OtherMessage message={message} margin={false} />
                    } else {
                        previousUid = message.userUid;
                        return <OtherMessage message={message} margin={true} />
                    }
                }
            })}
        </div>
    )
}