import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

function ProfileSettings() {

    const validateForm = () => {

    }

    const handleSubmit = () => {
        validateForm() 

        
    }

    return (
        <div className='m-5'>
            <h2 className='text-center'>
                <span>Settings </span>
                <FontAwesomeIcon icon={faUserCog} />
            </h2>
            <Form className="needs-validation" onSubmit={() => handleSubmit()}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Your Surname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control type="text" placeholder="New User Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                    <Form.Text className="invalid-feedback">
                        {"Incorect password. (Make sure you have at least 5 characters)"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="youremail@random.com" />
                    <Form.Text className="invalid-feedback">
                        {"Incorect email address"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="text" placeholder="122 122 122" />
                    <Form.Text className="invalid-feedback">
                        {"Please type you phone number without signs like '-', '+' and spaces"}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ProfileSettings;
