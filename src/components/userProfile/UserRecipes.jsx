import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import utensils from '../../assets/images/utensils-solid.png';

function UserRecipes() {
    return (
        <Container className="my-4">
            <Row xs={1} md={2} xxl={4} className="g-4">
                <Col className="d-flex justify-content-center">
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={utensils} width={100} />
                        <Card.Body className="d-flex justify-content-center align-items-center">
                            <div>
                                <Button variant="outline-info">Add new recipe</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/100" width={100} />
                        <Card.Body>
                            <Card.Title>Recipe Title</Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Tags</ListGroupItem>
                                <ListGroupItem>Time</ListGroupItem>
                                <ListGroupItem>Type</ListGroupItem>
                            </ListGroup>
                            <div className="d-flex justify-content-around mt-1">
                                <Button variant="outline-info">Edit</Button>
                                <Button variant="outline-danger">Remove</Button>
                                <Button variant="outline-danger">Shopping</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default UserRecipes;
