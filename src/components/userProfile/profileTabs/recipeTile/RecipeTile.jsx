import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEdit, faHeart, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';

function RecipeTile(props) {
    const [heartIcon, setHeartIcon] = useState(regularHeart);

    useEffect(() => {
        if (props.isFavourite === true) {
            setHeartIcon(faHeart);
        }
    }, [props.isFavourite]);

    function handleHeartClick() {
        heartIcon === regularHeart ? setHeartIcon(faHeart) : setHeartIcon(regularHeart);
    }

    return (
        <Col className='d-flex justify-content-center'>
            <Card border='light' style={{ width: '18rem', minHeight: '532px' }}>
                <Card.Img variant='top' src='https://via.placeholder.com/100' />
                <button
                    type={'button'}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        padding: 0,
                        background: 'transparent',
                        border: 'none',
                    }}
                    onClick={handleHeartClick}
                >
                    <FontAwesomeIcon
                        icon={heartIcon}
                        className={'text-danger'}
                        style={{
                            fontSize: '1.75rem',
                        }}
                    />
                </button>
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
                    <div className='d-flex justify-content-around mt-1'>
                        <Button variant='outline-info'>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant='outline-danger'>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button variant='outline-primary'>
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RecipeTile;
