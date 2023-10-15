import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const UserCardPanel = () => {
    const UserCard = (user) => {
        const { displayName, email, photoURL, isOnline, lastOnline } = user;
        return (
            <div className="card">
                <image className="card-img-left" src={photoURL} />
                <div className="card-body">
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
            {users && users.map(user => <UserCard user={user.user} />)}
        </div>
    )
}