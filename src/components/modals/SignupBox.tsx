import { useState } from "react";
import { Modal } from "react-bootstrap";
import api from '../../api';
import endpoints from '../../api/endpoints';
import {auth, signInWithEmailAndPassword} from '../../constants/firebase';
import {InputField} from '../inputs/InputField';
import { ErrorMessage, FormInputContainer, SubmitButton } from './modals.elements';


function SignupBox(props: {show: boolean, onClose: () => void}) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profileURL, setProfileURL] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submit = () => {
        // check that the email/password have values put in
        if (email.length === 0 || username.length === 0 || firstName.length === 0 || lastName.length === 0 || password.length === 0) {
            setErrorMessage("Please enter all fields.")
        } 
        else if (password !== passwordConfirm) {
            setErrorMessage("Passwords do not match.")
        }
        else {
            // signInWithEmailAndPassword(auth, email, password).then(() => {
            //     props.onClose();
            // }).catch(error => {
            //     if (error.message.includes("password")) {
            //         setErrorMessage("Login Failure: Incorrect password")
            //     }
            //     else if (error.message.includes("user")) {
            //         setErrorMessage("Login Failure: User not found")
            //     }
            //     else if (error.message.includes("email")) {
            //         setErrorMessage("Login Failure: Email poorly formatted")
            //     }
            // });
            api.post(endpoints.users(), {
                name: username,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                avatarURL: profileURL,
            }).then(() => {
                signInWithEmailAndPassword(auth, email, password).then(() => {
                        props.onClose();
                })
            });
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormInputContainer>
                        <p>Email</p>
                        <InputField 
                            placeholder="example@email.com"
                            onChange={(e) => {setEmail(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Username</p>
                        <InputField 
                            placeholder="username"
                            onChange={(e) => {setUsername(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>First Name</p>
                        <InputField 
                            placeholder="first name"
                            onChange={(e) => {setFirstName(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Last Name</p>
                        <InputField 
                            placeholder="last name"
                            onChange={(e) => {setLastName(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Profile Image URL</p>
                        <InputField 
                            placeholder="image url"
                            onChange={(e) => {setProfileURL(e)}} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Password</p>
                        <InputField 
                            type="password"
                            placeholder="password"
                            onChange={(e) => {setPassword(e)}}
                        />
                    </FormInputContainer>
                    <FormInputContainer>
                        <p>Confirm Password</p>
                        <InputField 
                            type="password"
                            placeholder="password"
                            onChange={(e) => {setPasswordConfirm(e)}}
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
                        Sign Up
                    </SubmitButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { SignupBox };