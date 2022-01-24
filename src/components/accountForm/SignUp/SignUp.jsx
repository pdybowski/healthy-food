import React from 'react';
import Button from 'react-bootstrap/Button';

const SignUp = ({ header, onSubmit, newUserHandler }) => {
    return (
        <div className='d-flex flex-column justify-content-around align-items-center'>
            <h2 className='text-center'>{header}</h2>
            <form
                className='d-flex flex-column justify-content-around align-items-center'
                onSubmit={onSubmit}
            >
                <div className='form-group'>
                    <label htmlFor='name'>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Your Name'
                        />
                    </label>
                </div>
                <div className='form-group'>
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
                <div className='form-group'>
                    <label htmlFor='password'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Password'
                        />
                    </label>
                </div>
                <Button type='submit' className='btn btn-primary'>
                    Sign Un
                </Button>
            </form>
            <div className='d-flex flex-column'>
                <Button type='button' className='btn btn-outline-light'>
                    Forget your password?
                </Button>
                <Button type='button' className='btn btn-outline-light' onClick={newUserHandler}>
                    {`You have already created an account`}
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
