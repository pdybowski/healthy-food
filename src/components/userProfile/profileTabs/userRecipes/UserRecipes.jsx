import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import { ROUTES_PATHS } from '../../../../routes';

function UserRecipes() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile
                    buttonLabel={'Add new recipe'}
                    route={ROUTES_PATHS.USER_RECIPES_EDIT}
                />
                <RecipeTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={true} />
            </Row>
        </Container>
    );
}

export default UserRecipes;
