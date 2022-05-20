import { useState } from "react";
import { Modal } from "react-bootstrap";
import api from '../api';
import endpoints from '../api/endpoints';
import {auth, signInWithEmailAndPassword} from '../firebase';

function LoginBox(props: {show: boolean, onClose: () => void}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submit = () => {
        // check that the email/password have values put in
        if (email.length === 0 || password.length === 0) {
            setErrorMessage("Please enter an email and password.")
        } else {
            try {
                signInWithEmailAndPassword(auth, email, password).then(() => {
                    props.onClose();
                });
            }
            catch (error) {
                setErrorMessage(String(error));
            }
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-input'>
                        <input 
                            className="login-input"
                            placeholder="example@email.com"
                            onChange={(e) => {setEmail(e.currentTarget.value)}}
                        />
                    </div>
                    <div className='form-input'>
                        <input 
                            type="password"
                            className="login-input"
                            placeholder="password"
                            onChange={(e) => {setPassword(e.currentTarget.value)}}
                        />
                    </div>
                    <p className="error-message">
                        {errorMessage}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className="make-post-button"
                        onClick={() => {
                            submit();
                        }}>
                        Login
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { LoginBox };