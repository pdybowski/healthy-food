import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewRecipeTile from '../newRecipeTile/NewRecipeTile.jsx';
import RecipeTile from '../recipeTile/RecipeTile.jsx';

function UserRecipes() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewRecipeTile />
                <RecipeTile isFavourite={false} />
                <RecipeTile isFavourite={false} />
                <RecipeTile isFavourite={false} />
            </Row>
        </Container>
    );
}

export default UserRecipes;
