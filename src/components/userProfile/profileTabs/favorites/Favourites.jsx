import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile.jsx';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile.jsx';
import ApiQuery from '../../../shared/api/ApiQuery';

function Favourites() {
    const [isFavRecipes, setIsFavRecipes] = useState(true);
    const [isFavMenu, setIsFavMenu] = useState(false);

    const [recipes, setRecipes] = useState([]);
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
            setMealPlans((await ApiQuery.get('mealPlans')).data);
        }

        fetchData();
    }, []);

    const [activeButton, setActiveButton] = useState('recipes');

    const recipesHandlerButton = () => {
        setIsFavRecipes(true);
        setIsFavMenu(false);
        setActiveButton('recipes');
    };

    const menuHandlerButton = () => {
        setIsFavRecipes(false);
        setIsFavMenu(true);
        setActiveButton('mealPlans');
    };

    return (
        <Container className='my-4'>
            <Button
                variant='outline-info'
                className={activeButton === 'recipes' ? 'active me-3 mb-3' : 'me-3 mb-3'}
                onClick={recipesHandlerButton}
            >
                Recipes
            </Button>
            <Button
                variant='outline-info'
                className={activeButton === 'mealPlans' ? 'active me-3 mb-3' : 'me-3 mb-3'}
                onClick={menuHandlerButton}
            >
                Meal plans
            </Button>
            {isFavRecipes === true && isFavMenu === false ? (
                <Row xs={1} md={2} xxl={4} className='g-4'>
                    {recipes.map((recipe) => {
                        return (
                            <RecipeTile
                                data={recipe}
                                title={recipe.title}
                                itemTags={recipe.tags}
                                time={recipe.timeToPrepare}
                                mealType={recipe.mealType}
                                key={recipe.id}
                                isFavourite={true}
                                isLoggedIn={true}
                                isOwner={false}
                                image={recipe.image}
                                id={recipe.id}
                            />
                        );
                    })}
                </Row>
            ) : isFavRecipes === false && isFavMenu === true ? (
                <Row xs={1} md={2} xxl={4} className='g-4'>
                    {mealPlans.map((menu) => {
                        return (
                            <MenuTile
                                title={menu.title}
                                itemTags={menu.tags}
                                fullMenuData={menu.menu}
                                key={menu.id}
                                isFavourite={true}
                                isLoggedIn={true}
                                isOwner={false}
                                id={menu.id}
                            />
                        );
                    })}
                </Row>
            ) : null}
        </Container>
    );
}

export default Favourites;
