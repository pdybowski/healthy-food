import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faClock, faEdit, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function RecipeTile() {
    return (
        <Col className="d-flex justify-content-center">
            <Card border="light" style={{ width: '18rem', minHeight: '532px' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <FontAwesomeIcon
                    icon={faHeart}
                    className="text-danger"
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        fontSize: '1.75rem',
                    }}
                />
                <Card.Body>
                    <Card.Title>Recipe Title</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <span
                                style={{
                                    borderRadius: '0.5rem',
                                    border: '1px solid #f2a22c',
                                    padding: '0.25rem',
                                }}
                            >
                                Tags
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FontAwesomeIcon icon={faClock} className="text-info" />
                            <span className="ms-1">Time</span>
                        </ListGroupItem>
                        <ListGroupItem>Type</ListGroupItem>
                    </ListGroup>
                    <div className="d-flex justify-content-around mt-1">
                        <Button variant="outline-info">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RecipeTile;
