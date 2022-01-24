import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Button from 'react-bootstrap/Button';
import './accountForm.css';

const AccountForm = (props) => {
    const [isNewUser, SetIsNewUser] = React.useState(false);

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='d-flex flex-column justify-content-around align-items-center'>
                {isNewUser ? (
                    <SignUp header={'Sign Up'} />
                ) : (
                    <SignIn header={'Sign In'} newUserHandler={() => SetIsNewUser(true)} />
                )}
                <Button type='button' className='btn btn-outline-light' onClick={props.onHide}>
                    Go back
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default AccountForm;
