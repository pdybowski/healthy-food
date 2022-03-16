import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ApiQuery from '../../../components/shared/api/ApiQuery';
import LoadingSpinner from '../../shared/loadingSpinner/LoadingSpinner';

import '../accountForm.css';

const SignUp = ({
    header,
    onSubmit,
    newUserHandler,
    name = '',
    surname = '',
    username = '',
    email = '',
    phoneNumber = '',
    password = '',
}) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: name,
        surname: surname,
        username: username,
        phoneNumber: phoneNumber.toString(),
        email: email,
        password: password.toString(),
    });
    const [registerStatus, setRegisterStatus] = useState(false);
    const [spinner, setSpinner] = useState(false);

    async function signUp(form) {
        setSpinner(true);
        try {
            const request = await ApiQuery.post('auth/register', form);
            request ? setSpinner(false) : setSpinner(true);
            request.status === 200 ? setRegisterStatus(true) : setRegisterStatus(false);
        } catch (err) {
            console.error(err);
        }
    }

    const setField = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
        if (errors[name])
            setErrors({
                ...errors,
                [name]: null,
            });
    };

    const findErrors = () => {
        const { name, surname, username, email, phoneNumber, password } = form;
        const newErrors = {};

        if (!name || name === '') {
            newErrors.name = 'Name is required!';
        } else if (name.length > 40) {
            newErrors.name = 'Name is too long!';
        }
        if (!surname || surname === '') {
            newErrors.surname = 'Surname is required!';
        } else if (surname.length > 40) {
            newErrors.surname = 'Surname is too long!';
        }
        if (!username || username === '') {
            newErrors.username = 'Username is required!';
        } else if (username.length > 40) {
            newErrors.username = 'Username is too long!';
        }
        if (phoneNumber !== '') {
            if (!/^[0-9]{9,12}$/.test(phoneNumber)) {
                newErrors.phoneNumber = 'Phonenumber is invalid';
            }
        }
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
            signUp(form);
        }
    };

    return registerStatus ? (
        spinner ? (
            <LoadingSpinner />
        ) : (
            <div>
                <h2 className='text-center my-4'>User successfully registered!</h2>
                <div className='d-flex flex-column my-4'>
                    <Button type='button' className='btn button-action' onClick={newUserHandler}>
                        {`Pleas sign in`}
                    </Button>
                </div>
            </div>
        )
    ) : (
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
                            placeholder='Name'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.name && errors.name !== '' ? (
                        <span className='d-block text-danger'>{errors.name}</span>
                    ) : null}
                </Form.Group>
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='surname'>
                        <Form.Control
                            name='surname'
                            type='text'
                            className='form-control'
                            id='surname'
                            placeholder='Surname'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.surname && errors.surname !== '' ? (
                        <span className='d-block text-danger'>{errors.surname}</span>
                    ) : null}
                </Form.Group>
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='username'>
                        <Form.Control
                            name='username'
                            type='text'
                            className='form-control'
                            id='username'
                            placeholder='Username'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.username && errors.username !== '' ? (
                        <span className='d-block text-danger'>{errors.username}</span>
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
                            placeholder='Email'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.email && errors.email !== '' ? (
                        <span className='d-block text-danger'>{errors.email}</span>
                    ) : null}
                </Form.Group>
                <Form.Group className='form-group py-2'>
                    <Form.Label htmlFor='phoneNumber'>
                        <Form.Control
                            type='text'
                            name='phoneNumber'
                            className='form-control'
                            id='phoneNumber'
                            placeholder='Phonenumber'
                            onChange={setField}
                        />
                    </Form.Label>
                    {errors.phoneNumber && errors.phoneNumber !== '' ? (
                        <span className='d-block text-danger'>{errors.phoneNumber}</span>
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
