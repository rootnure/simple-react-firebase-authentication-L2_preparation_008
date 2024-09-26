import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    // signInWithPopup(auth, googleProvider)
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => console.log(err))

    const handleGoogleSingIn = () => {
        console.log('google is coming....');
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSingIn}>Login</button>
        </div>
    );
};

export default Login;