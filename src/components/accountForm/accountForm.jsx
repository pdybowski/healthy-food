import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './accountForm.css';
import { CustomModal } from '../shared/Modal/Modal';

const AccountForm = (props) => {
    return (
        <>
            {props.isModalShown ? (
                <CustomModal
                    {...props}
                    size='lg'
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                >
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
            ) : null}
        </>
    );
};

export default AccountForm;
