import React, { useState } from 'react';
import { CustomModal } from '../shared/modal/Modal';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './accountForm.css';

const AccountForm = (props) => {
    return (
        <CustomModal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <div className='d-flex flex-column justify-content-around align-items-center'>
                {props.isNewUser ? (
                    <SignUp
                        header={'Sign Up'}
                        newUserHandler={props.newUserHandler}
                        onSignInHandler={props.onSignInHandler}
                        onLogIn={props.onLogIn}
                    />
                ) : (
                    <SignIn
                        header={'Sign In'}
                        newUserHandler={props.newUserHandler}
                        onFormSubmit={props.onFormSubmit}
                        onLogIn={props.onLogIn}
                    />
                )}
            </div>
        </CustomModal>
    );
};

export default AccountForm;
