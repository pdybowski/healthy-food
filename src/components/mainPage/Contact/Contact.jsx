import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useForm } from 'react-hook-form';
import './style.css';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <main>
            <Container fluid className="contact-container bg-dark">
                <Row>
                    <Col lg={3}></Col>
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Stack className="contact-slogan text-light d-flex justify-content-center align-items-center">
                            <h3 className="text-uppercase">Keep in touch!</h3>
                            <p className="contact-details">Reach us by phone: 500 800 300</p>
                            <p className="contact-details">...or by our contact form</p>
                        </Stack>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="FormControlInputName">
                                <Form.Label className="contact-label text-light">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    {...register('name', { required: true, maxLength: 15 })}
                                />
                                {errors.name && (
                                    <p className="text-danger">
                                        Please enter you name (max. 15 characters)
                                    </p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="FormControlInputEmail">
                                <Form.Label className="contact-label text-light">
                                    Email address
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-danger">Please check your email</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="FormControlInputTextarea">
                                <Form.Label className="contact-label text-light">
                                    Your message
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="message"
                                    rows={3}
                                    {...register('message', { required: true, maxLength: 50 })}
                                />
                                {errors.message && (
                                    <p className="text-danger">
                                        Please check your message (max. 500 characters)
                                    </p>
                                )}
                            </Form.Group>
                            <div className="contact-button-container">
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </main>
    );
}

export default Contact;
