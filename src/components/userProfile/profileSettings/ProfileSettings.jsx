import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ROUTES_PATHS } from '../../../routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faUserCog } from '@fortawesome/free-solid-svg-icons';

function ProfileSettings({ handleSettingsClick }) {
    const [form, setForm] = React.useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container className='my-5'>
            <h2 className='text-center'>
                <span>Settings </span>
                <FontAwesomeIcon icon={faUserCog} />
            </h2>
            <LinkContainer to={ROUTES_PATHS.USER_PROFILE}>
                <button className='d-block mx-auto border-0 bg-white' onClick={handleSettingsClick}>
                    <span>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />{' '}
                    </span>
                    Move back to your profile
                </button>
            </LinkContainer>
            <Form className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Name'
                        onChange={(e) => setField('name', e.target.value)}
                        {...register('name', { required: true, maxLength: 15 })}
                    />
                    {errors.name && (
                        <p className='text-danger'>Please enter your name (max. 15 characters)</p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicSurname'>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Surname'
                        onChange={(e) => setField('surname', e.target.value)}
                        {...register('surname', { required: true, maxLength: 15 })}
                    />
                    {errors.surname && (
                        <p className='text-danger'>
                            Please enter your surname (max. 15 characters)
                        </p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicUserName'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='New Username'
                        onChange={(e) => setField('username', e.target.value)}
                        {...register('username', { required: true, maxLength: 15 })}
                    />
                    {errors.username && (
                        <p className='text-danger'>Please enter username (max. 15 characters)</p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='********'
                        onChange={(e) => setField('password', e.target.value)}
                        {...register('password', {
                            required: true,
                            maxLength: 20,
                            pattern: /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm,
                        })}
                    />
                    {errors.password && (
                        <p className='text-danger'>
                            Password should be at least one capital letter, one small letter, one
                            number and 8 characters length (max. 20 characters)
                        </p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='youremail@random.com'
                        onChange={(e) => setField('email', e.target.value)}
                        {...register('email', {
                            required: true,
                            pattern:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                    />
                    {errors.email && <p className='text-danger'>Please check your email</p>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPhone'>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='122122122'
                        onChange={(e) => setField('phone', e.target.value)}
                        {...register('phone', {
                            required: true,
                            pattern: /^(\+[\d]{1,3})?(\(?[0-9]{2}\))?[0-9]{9,9}$/g,
                        })}
                    />
                    {errors.phone && (
                        <p className='text-danger'>
                            Please type you phone number without special characters and spaces
                        </p>
                    )}
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ProfileSettings;
