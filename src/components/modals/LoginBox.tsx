import { useState } from "react";
import { Modal } from "react-bootstrap";
import {auth, signInWithEmailAndPassword} from '../../constants/firebase';
import {InputField} from '../inputs/InputField';
import { ErrorMessage, FormInputContainer, SubmitButton } from './modals.elements';


function LoginBox(props: {show: boolean, onClose: () => void}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submit = () => {
        // check that the email/password have values put in
        if (email.length === 0 || password.length === 0) {
            setErrorMessage("Please enter an email and password.")
        } else {
            signInWithEmailAndPassword(auth, email, password).then(() => {
                props.onClose();
            }).catch(error => {
                if (error.message.includes("password")) {
                    setErrorMessage("Login Failure: Incorrect password")
                }
                else if (error.message.includes("user")) {
                    setErrorMessage("Login Failure: User not found")
                }
                else if (error.message.includes("email")) {
                    setErrorMessage("Login Failure: Email poorly formatted")
                }
            });
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormInputContainer>
                        <p>Email</p>
                        <InputField 
                            placeholder="example@email.com"
                            onChange={(e) => {setEmail(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Password</p>
                        <InputField 
                            type="password"
                            placeholder="password"
                            onChange={(e) => {setPassword(e)}}
                        />
                    </FormInputContainer>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                </Modal.Body>
                <Modal.Footer>
                    <SubmitButton 
                        onClick={() => {
                            submit();
                        }}>
                        Login
                    </SubmitButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { LoginBox };