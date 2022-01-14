import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewRecipeTile from './NewRecipeTile';
import RecipeTile from './RecipeTile';

function UserRecipes() {
    return (
        <Container className="my-4">
            <Row xs={1} md={2} xxl={4} className="g-4">
                <NewRecipeTile />
                <RecipeTile />
                <RecipeTile />
                <RecipeTile />
            </Row>
        </Container>
    );
}

export default UserRecipes;
