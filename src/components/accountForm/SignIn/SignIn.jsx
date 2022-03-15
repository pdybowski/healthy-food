import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ApiQuery from '../../../components/shared/api/ApiQuery';
import { setLocalStorage } from '../../../utils/localeStorage';
import { LS_TOKEN, LS_USER_NAME, LS_USER_ID } from '../../../constants/localStorage';
import LoadingSpinner from '../../shared/loadingSpinner/LoadingSpinner';

import '../accountForm.css';

const SignIn = ({
    header,
    newUserHandler,
    onFormSubmit,
    onLogIn,
    endpoint,
    email = '',
    password = '',
}) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        email: email,
        password: password,
    });
    const [loginErrorStatus, setloginErrorStatus] = useState(false);
    const [spinner, setSpinner] = useState(false);

    async function signIn(form) {
        setSpinner(true);
        try {
            const request = await ApiQuery.post(endpoint, form);
            request ? setSpinner(false) : setSpinner(true);
            setLocalStorage(LS_TOKEN, request.data.token);
            setLocalStorage(LS_USER_NAME, request.data.user.name);
            setLocalStorage(LS_USER_ID, request.data.user._id);
            request.status === 200 ? onLogIn() : null;
        } catch (err) {
            setloginErrorStatus(true);
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
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
        Object.keys(newErrors).length > 0 ? setErrors(newErrors) : signIn(form);
    };

    return loginErrorStatus ? (
        <div className='d-flex flex-column my-4'>
            <h2 className='text-center my-4'>Invalid email or password</h2>
            <Button type='button' className='btn button-action'>
                Forgot your password?
            </Button>
            <Button type='button' className='btn button-action' onClick={newUserHandler}>
                {`Don't have an account yet? Register`}
            </Button>
        </div>
    ) : spinner ? (
        <LoadingSpinner />
    ) : (
        <div className='d-flex flex-column justify-content-around align-items-center'>
            <h2 className='text-center my-4'>{header}</h2>
            <Form
                onSubmit={onFormSubmit}
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
                <Button type='submit' className='btn btn-primary my-1' onClick={handleSubmit}>
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
