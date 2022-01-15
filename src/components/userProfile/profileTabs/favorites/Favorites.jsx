import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../recipeTile/RecipeTile.jsx';

function Favorites() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <RecipeTile isFavourite={true} />
                <RecipeTile isFavourite={true} />
                <RecipeTile isFavourite={true} />
            </Row>
        </Container>
    );
}

export default Favorites;
