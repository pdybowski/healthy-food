import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import { MEAL_TYPE } from '../upsertRecipe/UpsertRecipe';
import ApiQuery from '../../components/shared/api/ApiQuery';

import './upsertMenu.css';

function UpsertMenu({ menu = { day1: [], day2: [] } }) {
    const [recipes, setRecipes] = useState([]);
    const [tagList, setTagList] = useState({ tags: [] });

    const [chosenRecipe, setChosenRecipe] = useState('');
    const [typeOfMeal, setTypeOfMeal] = useState('');

    React.useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
        }

        fetchData();
    }, []);

    const [form, setForm] = useState({
        menu: {
            ...menu,
        },
        tags: [],
    });

    const setField = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    function handleAdditionRecipe(day) {
        const formState = { ...form };
        formState.menu[day].push({
            mealType: typeOfMeal,
            recipe: chosenRecipe,
        });

        setForm(formState);
    }

    const handleTagDelete = (i) => {
        const tagListState = { ...tagList };
        tagListState.tags = tagList.tags.filter((tag, index) => index !== i);
        setTagList(tagListState);

        const formState = { ...form };
        formState.tags = tagListState.tags.map((tag) => tag['text']);
        setForm(formState);
    };

    const handleTagAddition = (tag) => {
        const tagListState = { ...tagList };
        tagListState.tags.push(tag);
        setTagList(tagListState);

        const formState = { ...form };
        formState.tags = [...formState.tags, tag.text];
        setForm(formState);
    };

    return (
        <Container className='my-4'>
            <h1>Create new menu</h1>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    placeholder='Enter menu title'
                    name='title'
                    type='text'
                    onChange={setField}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Tags</Form.Label>
                <div>
                    <TagsEdit
                        tags={tagList.tags}
                        handleDelete={handleTagDelete}
                        handleAddition={handleTagAddition}
                        inputFieldPosition='bottom'
                    />
                </div>
            </Form.Group>
            <Form>
                <Carousel variant='dark' interval={null}>
                    {Object.keys(form.menu).map((day, id) => {
                        const currentDay = `day${id + 1}`;

                        return (
                            <Carousel.Item key={id} indicators='false' interval={null}>
                                <h2 className={'text-center'}>{`Day ${id + 1}`}</h2>
                                {form.menu[currentDay].length > 0 && (
                                    <div>
                                        Menu for day {id + 1}:
                                        <ul>
                                            {form.menu[currentDay].map((menuElement, index) => {
                                                return (
                                                    <li key={index}>
                                                        {`${menuElement.mealType}: ${menuElement.recipe}`}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                                <Form.Group className='mb-3'>
                                    <Form.Label className='me-3'>Meals</Form.Label>
                                    <div className='d-flex flex-row'>
                                        <Form.Select
                                            aria-label='type-of-meal'
                                            className='me-3'
                                            onChange={(e) => setTypeOfMeal(e.target.value)}
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
                                        </Form.Select>
                                        <Form.Select
                                            aria-label='meal'
                                            className='me-3'
                                            onChange={(e) => setChosenRecipe(e.target.value)}
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
                                            if (typeOfMeal === '') return false
                                            if (chosenRecipe === '') return false 

                                            handleAdditionRecipe(currentDay);
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