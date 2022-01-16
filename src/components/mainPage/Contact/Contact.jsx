import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import ContactForm from '../contactForm/ContactForm.jsx';

function Contact() {
    return (
        <main>
            <Container fluid className="bg-dark pt-3 pb-3">
                <Row>
                    <Col lg={3}></Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <ContactForm />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Stack className="text-light d-flex justify-content-center align-items-center">
                            <h3 className="text-uppercase">Keep in touch!</h3>
                            <p className="m-0">Reach us by phone: 500 800 300</p>
                            <p className="m-0">...or by our contact form</p>
                        </Stack>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </main>
    );
}

export default Contact;
