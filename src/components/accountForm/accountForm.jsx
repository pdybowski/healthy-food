import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Button from 'react-bootstrap/Button';
import './accountForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const AccountForm = (props) => {
    const [isNewUser, SetIsNewUser] = React.useState(false);

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='d-flex flex-column justify-content-around align-items-center'>
                {isNewUser ? (
                    <SignUp header={'Sign Up'} newUserHandler={() => SetIsNewUser(false)} />
                ) : (
                    <SignIn header={'Sign In'} newUserHandler={() => SetIsNewUser(true)} />
                )}
                <Button type='button' className='btn button-action' onClick={props.onHide}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    {' Go back'}
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default AccountForm;
