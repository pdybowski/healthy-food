import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import { MEAL_TYPE } from '../upsertRecipe/UpsertRecipe';
import ApiQuery from '../../components/shared/api/ApiQuery';

import './upsertMenu.css';

function UpsertMenu() {
    const [tags, setTags] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [chosenRecipe, setChosenRecipe] = useState('');
    const [typeOfMeal, setTypeOfMeal] = useState('');
    const [listOfMeal, setListOfMeal] = useState([]);
    console.log(MEAL_TYPE);

    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    // const mealType = ['Breakfast', 'Dinner', 'Supper', 'Snacks'];

    React.useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
        }

        fetchData();
    }, []);

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    console.log(recipes);

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    console.log(listOfMeal);
    return (
        <Container className='my-4'>
            <h1>Create new menu</h1>
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
            <Form>
                <Carousel variant='dark' interval={null}>
                    {days.map((day, index) => {
                        return (
                            <Carousel.Item key={index} indicators='false' interval={null}>
                                <h2 className={'text-center'}>{day}</h2>
                                {listOfMeal.length > 0 ? (
                                    <ul>
                                        {listOfMeal.map((menuElement, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                >{`${menuElement.type}: ${menuElement.recipe}`}</li>
                                            );
                                        })}
                                    </ul>
                                ) : null}
                                <Form.Group className='mb-3'>
                                    <Form.Label className='me-3'>Meals</Form.Label>
                                    <div className='d-flex flex-row'>
                                        <Form.Select
                                            aria-label='type-of-meal'
                                            className='me-3'
                                            onChange={(e) => {
                                                setTypeOfMeal(e.target.value);
                                            }}
                                            value={typeOfMeal}
                                        >
                                            <option value=''>-- Select one --</option>
                                            <option value={MEAL_TYPE.BREAKFAST}>
                                                {MEAL_TYPE.BREAKFAST}
                                            </option>
                                            <option value={MEAL_TYPE.LUNCH}>
                                                {MEAL_TYPE.LUNCH}
                                            </option>
                                            <option value={MEAL_TYPE.DINNER}>
                                                {MEAL_TYPE.DINNER}
                                            </option>
                                            {/* {mealType.map((meal, index) => {
                                                return (
                                                    <option value={meal} key={index}>
                                                        {meal}
                                                    </option>
                                                );
                                            })} */}
                                        </Form.Select>
                                        <Form.Select
                                            aria-label='meal'
                                            className='me-3'
                                            onChange={(e) => {
                                                setChosenRecipe(e.target.value);
                                            }}
                                            value={chosenRecipe}
                                        >
                                            <option value=''>-- Select one --</option>
                                            {recipes.map((recipe) => {
                                                if (
                                                    recipe.mealType.includes(
                                                        typeOfMeal.toUpperCase()
                                                    )
                                                ) {
                                                    return (
                                                        <option
                                                            value={recipe.title}
                                                            key={recipe.id}
                                                        >
                                                            {recipe.title}
                                                        </option>
                                                    );
                                                }
                                            })}
                                        </Form.Select>
                                    </div>
                                    <Button
                                        variant='primary'
                                        type='button'
                                        className='w-25 my-3 button-custom'
                                        onClick={() => {
                                            setListOfMeal([
                                                ...listOfMeal,
                                                { type: typeOfMeal, recipe: chosenRecipe },
                                            ]);
                                            setTypeOfMeal('');
                                            setChosenRecipe('');
                                        }}
                                    >
                                        Add meal to my menu
                                    </Button>
                                </Form.Group>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Form>
            <Button variant='light' type='submit' className='my-5 w-100'>
                Submit
            </Button>
        </Container>
    );
}

export default UpsertMenu;
