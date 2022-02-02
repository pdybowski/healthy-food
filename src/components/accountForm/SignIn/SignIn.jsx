import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import '../accountForm.css';

const SignIn = ({ header, newUserHandler, onFormSubmit, onLogIn, email = '', password = '' }) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        email: email,
        password: password,
    });

    const setField = ({ target: { name, value } }) => {
        const convertedValue = isNaN(value) ? value : parseInt(value, 10);
        setForm({
            ...form,
            [name]: convertedValue,
        });
        if (errors[name])
            setErrors({
                ...errors,
                [name]: null,
            });
    };

    const findErrors = () => {
        const { email, password } = form;
        const newErrors = {};

        if (!email || email === '') {
            newErrors.email = 'E-mail is required!';
        }
        if (!password || password === '') {
            newErrors.password = 'Password is required!';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrors();
        console.log(newErrors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onLogIn();
        }
    };

    return (
        <div className='d-flex flex-column justify-content-around align-items-center'>
            <h2 className='text-center my-4'>{header}</h2>
            <Form
                onSubmit={(evt) => onFormSubmit(evt)}
                className='d-flex flex-column justify-content-around align-items-center'
            >
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='email'>
                        <Form.Control
                            name='email'
                            type='email'
                            className='form-control'
                            id='email'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                            onChange={setField}
                        />
                    </Form.Label>
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='password'>
                        <Form.Control
                            name='password'
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Password'
                            onChange={setField}
                        />
                    </Form.Label>
                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Button
                    type='submit'
                    className='btn btn-primary my-1'
                    onClick={(e) => handleSubmit(e)}
                >
                    Sign In
                </Button>
            </Form>
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
