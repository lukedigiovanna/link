import { useState } from "react";
import { Modal } from "react-bootstrap";
import api from '../../api';
import endpoints from '../../api/endpoints';
import {auth} from '../../constants/firebase';
import { SubmitButton, TextArea, ErrorMessage } from "./modals.elements";
import { useDispatch } from 'react-redux';
import { prependPost } from '../../store/posts';

function MakePost(props: {show: boolean, onClose: () => void}) {
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    const submit = () => {
        if (body.length > 0) {
            api.post(endpoints.posts(), {
                body: body,
                userId: auth.currentUser?.uid,
                isReply: false
            }).then(response => {
                console.log(response);
                // dispatch the new post to the store
                dispatch(prependPost(response.data));
                props.onClose();
            });
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextArea 
                        placeholder="Write your heart's desire"
                        value={body}
                        onChange={(e) => {setBody(e.target.value)}}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <SubmitButton 
                        onClick={() => {
                            submit();
                        }}
                        disabled={body.length === 0}
                        >
                        Post
                    </SubmitButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { MakePost };