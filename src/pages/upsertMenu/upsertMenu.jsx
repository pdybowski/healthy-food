import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import ApiQuery from '../../components/shared/api/ApiQuery';

import './upsertMenu.css';

function UpsertRecipe() {
    const [tags, setTags] = useState([]);
    const [menus, setMenus] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [typeOfMeal, setTypeOfMeal] = useState('');

    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    const mealType = ['Breakfast', 'Dinner', 'Supper', 'Snacks'];

    React.useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
        }

        fetchData();
    }, []);
    console.log(recipes);

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    return (
        <Container className='my-4'>
            <h1>Create new menu</h1>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder='Enter menu title' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Tags</Form.Label>
                    <div>
                        <TagsEdit
                            tags={tags}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            inputFieldPosition='bottom'
                        />
                    </div>
                </Form.Group>
                <Carousel variant='dark' interval={null}>
                    {days.map((day, index) => {
                        return (
                            <Carousel.Item key={index} indicators='false' interval={null}>
                                <h2 className={'text-center'}>{day}</h2>
                                {menus > 0 ? <ul></ul> : null}
                                <Form>
                                    <Form.Group className='mb-3'>
                                        <Form.Label className='me-3'>Meals</Form.Label>
                                        <div className='d-flex flex-row'>
                                            <Form.Select
                                                aria-label='type-of-meal'
                                                className='me-3'
                                                onSelect={(e) => setTypeOfMeal(e.target.value)}
                                            >
                                                {mealType.map((meal, index) => {
                                                    return (
                                                        <option value={meal} key={index}>
                                                            {meal}
                                                        </option>
                                                    );
                                                })}
                                            </Form.Select>
                                            <Form.Select aria-label='meal' className='me-3'>
                                                {typeOfMeal !== '' ? (
                                                    recipes.map((recipe) => {
                                                        recipe.mealType.filter();
                                                    })
                                                ) : (
                                                    <option value='no-meal'>
                                                        {'Choose a meal type'}
                                                    </option>
                                                )}
                                            </Form.Select>
                                        </div>
                                        <Button
                                            variant='primary'
                                            type='submit'
                                            className='w-25 my-3 button-custom'
                                        >
                                            Add meal to my menu
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <Button variant='light' type='submit' className='my-5 w-100'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default UpsertRecipe;
