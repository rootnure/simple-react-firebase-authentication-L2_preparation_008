import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSingIn}>Login</button>
        </div>
    );
};

export default Login;