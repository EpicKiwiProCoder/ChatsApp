import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const UserCardPanel = () => {
    const UserCard = (user) => {
        const { displayName, email, photoURL, isOnline, lastOnline } = user.user;
        console.log(photoURL);
        return (
            <div className="card" >
                <img className="card-img-top inline" referrerPolicy="no-referrer" src={photoURL} />
                <div className="card-body inline">
                    <div className="card-title">
                        {displayName}
                    </div>
                    <div className="card-subtitle">
                        {email}
                    </div>
                </div>
            </div>
        )
    }

    const [users] = useCollectionData(collection(db, "users"))

    return (
        <div>
            {users && users.map(user => <UserCard user={user} />)}
        </div>
    )
}