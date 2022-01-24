import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './accountForm.css';

const AccountForm = (props) => {
    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros.
                </p>
                <span className={`goBack_arrow`} onClick={props.onHide}>
                    Go back
                </span>
            </Modal.Body>
        </Modal>
    );
};

export default AccountForm;
