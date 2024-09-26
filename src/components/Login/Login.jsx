import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successful');
                setUser(null);
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {user &&
                <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleGoogleSingIn}>Google Login</button>
            }
        </div>
    );
};

export default Login;