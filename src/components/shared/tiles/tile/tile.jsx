import { Card, Col } from 'react-bootstrap';
import React from 'react';

function Tile({ children }) {
    return (
        <Col className='d-flex justify-content-center'>
            <Card border='light' style={{ width: '18rem' }}>
                {children}
            </Card>
        </Col>
    );
}

export default Tile;
