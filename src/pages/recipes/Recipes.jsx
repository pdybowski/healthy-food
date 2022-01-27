import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../../components/shared/tiles/recipeTile/RecipeTile';
import Search from '../../components/shared/search/Search';
import ApiQuery from '../../components/shared/ApiClass/ApiClass';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');

    const fetchData = async () => {
        try {
            setRecipes((await ApiQuery.get('recipes')).data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateInput = async (input) => {
        setInput(input);
    };

    return (
        <Container className='my-4'>
            <Search input={input} onChange={updateInput} />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                {recipes
                    .filter((recipe) => {
                        if (input === '') {
                            return recipe;
                        } else if (recipe.title.toLowerCase().includes(input.toLowerCase())) {
                            return recipe;
                        }
                    })
                    .map((recipe) => {
                        return (
                            <RecipeTile
                                title={recipe.title}
                                itemTags={recipe.tags}
                                time={recipe.timeToPrepare}
                                mealType={recipe.mealType}
                                key={recipe.id}
                                isFavourite={false}
                                isLoggedIn={false}
                                isOwner={false}
                            />
                        );
                    })}
            </Row>
        </Container>
    );
}

export default Recipes;
