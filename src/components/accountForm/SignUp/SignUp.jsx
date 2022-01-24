import React from 'react';
import Button from 'react-bootstrap/Button';

const SignUp = ({ header, onSubmit }) => {
    return (
        <div className='flex flex-column justify-content-around align-items-center'>
            <h2>{header}</h2>
            <form onSubmit={onSubmit}>
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
        </div>
    );
};

export default SignUp;