import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';

function Favourites() {
    const [isFavRecipes, setIsFavRecipes] = React.useState(false);
    const [isFavMenu, setIsFavMenu] = React.useState(false);

    const recipesHandlerButton = () => {
        setIsFavRecipes(true);
        isFavMenu === false ? null : setIsFavMenu(false);
    };

    const menuHandlerButton = () => {
        setIsFavMenu(true);
        isFavRecipes === false ? null : setIsFavRecipes(false);
    };

    return (
        <Container className='my-4'>
            <Button variant='outline-info' className='me-3 mb-3' onClick={recipesHandlerButton}>
                Recipes
            </Button>
            <Button variant='outline-info' className='mb-3' onClick={menuHandlerButton}>
                Menus
            </Button>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={false} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={true} />
                <RecipeTile isFavourite={true} isLoggedIn={true} isOwner={false} />
            </Row>
        </Container>
    );
}

export default Favourites;
