import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faUserCog } from '@fortawesome/free-solid-svg-icons';

function ProfileSettings({ handleSettingsClick }) {
    const [form, setForm] = React.useState({});
    // const [errors, setErrors] = React.useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    // const findFormErrors = () => {
    //     const { username, password, email } = form;
    //     const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
    //     const newErrors = {}

    //     // username
    //     if (username.length > 15) newErrors.username = 'Your username can not contain more than 15 characters';
    //     // password
    //     if (specialChars.split('').some(char =>
    //         password.includes(char))){
    //             return newErrors.password = 'Password does not include any special character (eg. !, @, %, $)';
    //         };
    //     // email
    //     if(!email.includes('@'))  return newErrors.email = 'Invalid e-mail address';
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container className='my-5'>
            <h2 className='text-center'>
                <span>Settings </span>
                <FontAwesomeIcon icon={faUserCog} />
            </h2>
            <button className='d-block mx-auto border-0 bg-white' onClick={handleSettingsClick}>
                <span>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />{' '}
                </span>
                Move back to your profile
            </button>
            <Form className='needs-validation' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Name'
                        onChange={(e) => setField('name', e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicSurname'>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your Surname'
                        onChange={(e) => setField('surname', e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicUserName'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='New Username'
                        onChange={(e) => setField('username', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {/* { errors.username } */}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='********'
                        onChange={(e) => setField('password', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {/* { errors.password } */}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='youremail@random.com'
                        onChange={(e) => setField('email', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {/* { errors.email } */}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPhone'>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='122122122'
                        onChange={(e) => setField('phone', e.target.value)}
                    />
                    <Form.Text className='text-muted'>
                        {"Please type you phone number without signs like '-', '+' and spaces"}
                    </Form.Text>
                    <Form.Text className='invalid-feedback'>
                        {"Please type you phone number without signs like '-', '+' and spaces"}
                    </Form.Text>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ProfileSettings;
