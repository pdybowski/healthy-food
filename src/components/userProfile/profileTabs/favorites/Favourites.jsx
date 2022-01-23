import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile.jsx';
import data from '../../../../assets/db.json';

function Favourites() {
    const [isFavRecipes, setIsFavRecipes] = React.useState(true);
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
            {isFavRecipes === true && isFavMenu === false ? (
                <Row xs={1} md={2} xxl={4} className='g-4'>
                    {data.recipes.map((recipe) => {
                        return (
                            <RecipeTile
                                title={recipe.title}
                                itemTags={recipe.tags}
                                time={recipe.timeToPrepare}
                                mealType={recipe.mealType}
                                key={recipe.id}
                                isFavourite={true}
                                isLoggedIn={true}
                                isOwner={false}
                            />
                        );
                    })}
                </Row>
            ) : isFavRecipes === false && isFavMenu === true ? (
                <Row xs={1} md={2} xxl={4} className='g-4'>
                    {data.menus.map((recipe) => {
                        return (
                            <MenuTile
                                title={recipe.title}
                                itemTags={recipe.tags}
                                fullMenuData={recipe.menu}
                                key={recipe.id}
                                isFavourite={true}
                                isLoggedIn={true}
                                isOwner={false}
                            />
                        );
                    })}
                </Row>
            ) : null}
        </Container>
    );
}

export default Favourites;
