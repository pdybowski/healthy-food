import { Button, Card, Col } from 'react-bootstrap';
import utensils from '../../../assets/images/utensils-solid.png';
import React from 'react';

function NewRecipeTile() {
    return (
        <Col className='d-flex justify-content-center'>
            <Card
                border='light'
                style={{
                    width: '18rem',
                    minHeight: '532px',
                }}
                className='d-flex align-items-center justify-content-around'
            >
                <div>
                    <Card.Img variant='top' src={utensils} style={{ width: '40px' }} />
                </div>
                <div>
                    <Card.Body className='d-flex justify-content-center align-items-center'>
                        <div>
                            <Button variant='outline-info'>Add new recipe</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
}

export default NewRecipeTile;
