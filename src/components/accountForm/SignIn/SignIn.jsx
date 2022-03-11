import { React, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import ApiQuery from '../../../components/shared/api/ApiQuery';

import '../accountForm.css';

const SignIn = ({ header, newUserHandler, onFormSubmit, onLogIn }) => {
    const [dataUsers, setDataUsers] = useState([]);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const fetchData = async () => {
        try {
            setDataUsers((await ApiQuery.get('users')).data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'E-mail is invalid';
        }

        if (!password || password === '') {
            newErrors.password = 'Password is required!';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrors();

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
                    {errors.email && errors.email !== '' ? (
                        <span className='d-block text-danger'>{errors.email}</span>
                    ) : null}
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
                    {errors.password && errors.password !== '' ? (
                        <span className='d-block text-danger'>{errors.password}</span>
                    ) : null}
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
                    Forgot your password?
                </Button>
                <Button type='button' className='btn button-action' onClick={newUserHandler}>
                    {`Don't have an account yet? Register`}
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
