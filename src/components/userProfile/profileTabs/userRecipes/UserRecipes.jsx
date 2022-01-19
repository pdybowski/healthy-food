import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile.jsx';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';

function UserRecipes() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile buttonLabel={'Add new recipe'} />
                <RecipeTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={true} />
            </Row>
        </Container>
    );
}

export default UserRecipes;
