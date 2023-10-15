import { collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const UserCardPanel = () => {
    const UserCard = (user) => {
        const { displayName, email, photoURL, isOnline, lastOnline } = user.user;
        console.log(photoURL);
        return (
            <div className="card userCard" >
                <img className="border border-primary m-2" referrerPolicy="no-referrer" src={photoURL} />

                <span className="card-title text p-0 m-0">
                    {displayName}
                </span>
                <span className="card-subtitle text-muted p-0 mb-2">
                    {email}
                </span>
            </div>
        )
    }

    const [users] = useCollectionData(collection(db, "users"))

    return (
        <div>
            <div className="text text-secondary text-center fs-3 fw-bold">Alle gebruikers</div>
            {users && users.map(user => <UserCard user={user} />)}
        </div>
    )
}