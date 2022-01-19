import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import SignIn from './SignIn/SignIn';

const Registration = ({ props }) => {
    const [isNewUser, setIsNewUser] = React.useState(false);

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton>
                {/* <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                {isNewUser ? (
                    <Container>
                        <Row>
                            <Col>
                                <SignIn header={'Sign in'} />
                            </Col>
                            <Col>
                                <WelcomeMessage
                                    title={'Hello, Friend!'}
                                    text={"Don't have an account?"}
                                    buttonAction={'SIGN UP'}
                                    onClickEvent={() => {
                                        setIsNewUser(!isNewUser);
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <Container>
                        <Row>
                            <Col>
                                <WelcomeMessage
                                    title={'Welcome Back'}
                                    text={"We're glad you are here with us!"}
                                    buttonAction={'Sign In'}
                                    onClickEvent={() => {
                                        setIsNewUser({ isNewUser: true });
                                    }}
                                />
                            </Col>
                            <Col>2 of 2</Col>
                        </Row>
                    </Container>
                )}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
};

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);
//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

export default Registration;
