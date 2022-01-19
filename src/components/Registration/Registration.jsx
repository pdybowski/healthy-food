import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Registration = ({ props }) => {
    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>I will put here Sign In</div>
                    <div>I will put here Create Account</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Registration;
