import React, { useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import { ROUTES_PATHS } from '../../../../routes';
import ApiQuery from '../../../shared/api/ApiQuery';
import RecipeTile from '../../../shared/tiles/recipeTile/RecipeTile';

function UserRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
        }

        fetchData();
    }, []);

    return (
        <Container className='my-4'>
            <Dropdown className='mb-3'>
                <DropdownButton id='dropdown-item-button' title='Choose meal type' variant='info'>
                    <Dropdown.Item as='button' onClick={() => setInput('BREAKFAST')}>
                        Breakfast
                    </Dropdown.Item>
                    <Dropdown.Item as='button' onClick={() => setInput('LUNCH')}>
                        Lunch
                    </Dropdown.Item>
                    <Dropdown.Item as='button' onClick={() => setInput('DINNER')}>
                        Dinner
                    </Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile buttonLabel={'Add new recipe'} route={ROUTES_PATHS.USER_RECIPES_ADD} />
                {recipes
                    .filter((recipe) => {
                        if (input === '') {
                            return recipe;
                        }
                        if (
                            recipe.mealType.find((mealType) => {
                                return mealType === input;
                            }) !== undefined
                        ) {
                            return recipe;
                        }
                    })
                    .map((recipe) => {
                        return (
                            <RecipeTile
                                data={recipe}
                                title={recipe.title}
                                itemTags={recipe.tags}
                                time={recipe.timeToPrepare}
                                mealType={recipe.mealType}
                                key={recipe.id}
                                isFavourite={false}
                                isLoggedIn={true}
                                isOwner={true}
                                image={recipe.image}
                            />
                        );
                    })}
            </Row>
        </Container>
    );
}

export default UserRecipes;
