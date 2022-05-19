import { auth } from '../firebase';

function LoginBox() {
    // firebase.
    // check if the user is logged in.
    console.log('auth',auth.currentUser);

    return (
        <button className="login-box">
            Login
        </button>
    );
}

export { LoginBox }