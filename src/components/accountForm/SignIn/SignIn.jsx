import React from 'react';
import Button from 'react-bootstrap/Button';

import '../accountForm.css';

const SignIn = ({ header, newUserHandler, onFormSubmit, onLogIn }) => {
    // const [formData, setFormData] = React.useState();

    return (
        <div className='d-flex flex-column justify-content-around align-items-center'>
            <h2 className='text-center my-4'>{header}</h2>
            <form
                onSubmit={(evt) => onFormSubmit(evt)}
                className='d-flex flex-column justify-content-around align-items-center'
            >
                <div className='form-group py-2'>
                    <label htmlFor='email'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                        />
                    </label>
                </div>
                <div className='form-group py-2'>
                    <label htmlFor='password'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Password'
                        />
                    </label>
                </div>
                <Button type='submit' className='btn btn-primary my-1' onClick={onLogIn}>
                    Sign In
                </Button>
            </form>
            <div className='d-flex flex-column my-4'>
                <Button type='button' className='btn button-action'>
                    Forget your password?
                </Button>
                <Button type='button' className='btn button-action' onClick={newUserHandler}>
                    {`You don't have an account?`}
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
