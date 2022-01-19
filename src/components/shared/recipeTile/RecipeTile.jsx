import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { EditControls } from '../editControls/EditControls';
import { FavouriteIcon } from '../favouriteIcon/FavouriteIcon';

function RecipeTile({ isFavourite, isLoggedIn, isOwner }) {
    return (
        <Col className='d-flex justify-content-center'>
            <Card border='light' style={{ width: '18rem', minHeight: '532px' }}>
                <Card.Img variant='top' src='https://via.placeholder.com/100' />
                <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
                <Card.Body>
                    <Card.Title>Recipe Title</Card.Title>
                    <ListGroup className='list-group-flush'>
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
                            <FontAwesomeIcon icon={faClock} className='text-info' />
                            <span className='ms-1'>Time</span>
                        </ListGroupItem>
                        <ListGroupItem>Type</ListGroupItem>
                    </ListGroup>
                    <EditControls isLoggedIn={isLoggedIn} isOwner={isOwner} />
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RecipeTile;
