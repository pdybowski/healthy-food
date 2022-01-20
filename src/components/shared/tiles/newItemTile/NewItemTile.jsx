import { Button, Card } from 'react-bootstrap';
import utensils from '../../../../assets/images/utensils-solid.png';
import React from 'react';
import Tile from '../tile/tile';

function NewItemTile({ buttonLabel }) {
    return (
        <Tile>
            <Card.Img variant='top' src={utensils} className='p-5' />
            <Card.Body className='d-flex justify-content-center align-items-center'>
                <Button variant='outline-info'>{buttonLabel}</Button>
            </Card.Body>
        </Tile>
    );
}

export default NewItemTile;
