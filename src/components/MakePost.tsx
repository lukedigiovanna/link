import { useState } from "react";
import { Modal } from "react-bootstrap";
import api from '../api';
import endpoints from '../api/endpoints';
import {auth} from '../firebase';

function MakePost(props: {show: boolean, onClose: () => void}) {
    const [body, setBody] = useState("");

    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Make a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea 
                        className="make-post-textarea"
                        placeholder="Write your hearts desire"
                        value={body}
                        onChange={(e) => {setBody(e.target.value)}}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className="make-post-button"
                        onClick={() => {
                            // do some checking on the body
                            if (body.length > 0) {
                                api.post(endpoints.posts(), {
                                    body: body,
                                    userId: auth.currentUser?.uid,
                                    isReply: false
                                }).then(response => {
                                    console.log(response);
                                    props.onClose();
                                });
                            }

                        }}>
                        Post
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { MakePost };