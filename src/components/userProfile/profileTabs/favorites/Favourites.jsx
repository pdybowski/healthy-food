import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';

function Favourites() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={false} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={false} />
            </Row>
        </Container>
    );
}

export default Favourites;
