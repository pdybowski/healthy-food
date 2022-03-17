import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ApiQuery from '../../../components/shared/api/ApiQuery';

import '../accountForm.css';

const SignUp = ({ header, onSubmit, newUserHandler, name = '', email = '', password = '' }) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: name,
        email: email,
        password: password,
    });

    async function postForm(form) {
        await ApiQuery.post('users', form);
    }

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
        const { name, email, password } = form;
        const newErrors = {};

        if (!name || name === '') {
            newErrors.name = 'Name is required!';
        } else if (name.length > 40) {
            newErrors.name = 'Name is too long!';
        }
        if (!email || email === '') {
            newErrors.email = 'E-mail is required!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'E-mail has incorrect format';
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
            postForm(form);
        }
    };

    return (
        <div className='d-flex flex-column justify-content-around align-items-center'>
            <h2 className='text-center my-4'>{header}</h2>
            <Form
                className='d-flex flex-column justify-content-around align-items-center'
                onSubmit={onSubmit}
            >
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='name'>
                        <Form.Control
                            name='name'
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Your Name'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.name && errors.name !== '' ? (
                        <span className='d-block text-danger'>{errors.name}</span>
                    ) : null}
                </Form.Group>
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='email'>
                        <Form.Control
                            type='email'
                            name='email'
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
                <Button onClick={handleSubmit} type='submit' className='btn btn-primary my-1'>
                    Sign Up
                </Button>
            </Form>
            <div className='d-flex flex-column my-4'>
                <Button type='button' className='btn button-action' onClick={newUserHandler}>
                    {`Already have an account? Sign in`}
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
