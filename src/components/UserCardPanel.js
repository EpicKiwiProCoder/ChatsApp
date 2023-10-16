import { collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Timestamp } from "firebase/firestore";
import { SignOut, SignIn } from "./Auth";

export const UserCardPanel = () => {
    const timeSinceOnline = (lastOnline) => {
        const secondsSince = Timestamp.now().seconds - lastOnline.seconds;
        if (secondsSince < 3600) {
            return (Math.floor(secondsSince / 60)) + " minuten";
        } else if (secondsSince < 3600 * 24) {
            return (Math.floor(secondsSince / 3600)) + " uur";
        } else {
            return (Math.floor(secondsSince / (3600 * 24))) + " dagen";
        }
    }

    const CurrentUserCard = (user) => {
        const { displayName, email, photoURL } = user.user;
        return (
            <div className="userCard border border-secondary rounded p-3" >
                <img className="border border-2 me-3 border-primary" referrerPolicy="no-referrer" src={photoURL} />
                <span>
                    <p className="text fw-medium fs-5 p-0 m-0">
                        {displayName}
                    </p>
                    <p className="text-muted p-0 m-0">
                        {email}
                    </p>
                </span>
            </div>
        )
    }

    const UserCard = (user) => {
        const { displayName, photoURL, isOnline, lastOnline } = user.user;
        return (
            <div className="userCard border border-secondary rounded p-3" >
                <img className={"border border-2 me-3 " + (isOnline ? "border-primary" : "border-secondary")} referrerPolicy="no-referrer" src={photoURL} />
                <span>
                    <p className="text fw-medium fs-5 p-0 m-0">
                        {displayName}
                    </p>
                    <p className="text-muted p-0 m-0">
                        {isOnline ? "Nu Online" : "Was " + timeSinceOnline(lastOnline) + " geleden online"}
                    </p>
                </span>
            </div>
        )
    }

    const [userEntries] = useCollectionData(collection(db, "users"))
    const currentUser = auth.currentUser;

    return (
        <div>
            {currentUser ?
                <div>
                    <div className="text text-secondary text-center fs-3 fw-bold">Ingelogd Als</div>
                    <CurrentUserCard user={currentUser} />
                    <SignOut />
                </div> :
                <div>
                    <div className="text text-secondary text-center fs-3 fw-bold">Niet Ingelogd</div>
                    <SignIn />
                </div>
            }

            <div className="text text-secondary text-center fs-3 mt-4 fw-bold">Alle gebruikers</div>
            {userEntries && userEntries.map((userEntry) => {
                if (!currentUser || userEntry.displayName !== currentUser.displayName) {
                    return <UserCard user={userEntry} />
                }
            })}
        </div>
    )
}