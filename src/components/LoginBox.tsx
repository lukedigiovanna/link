import { useSelector } from 'react-redux';

function LoginBox() {
    const firebase = useSelector((state: any) => state.firebase);
    // firebase.
    return (
        <button>
            <div className="login-box">
                <h1>Login</h1>
            </div>
        </button>
    );
}

export { LoginBox }