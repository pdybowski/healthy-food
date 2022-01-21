import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../../components/shared/tiles/recipeTile/RecipeTile';
import Search from '../../components/shared/search/Search';

function Recipes() {
    return (
        <Container className='my-4'>
            <Search />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <RecipeTile isFavourite={false} isLoggedIn={false} isOwner={false} />
            </Row>
        </Container>
    );
}

export default Recipes;
