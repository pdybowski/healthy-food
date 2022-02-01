import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import { MEAL_TYPE } from '../upsertRecipe/UpsertRecipe';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../routes';
import { useNavigate } from 'react-router-dom';

import './upsertMenu.css';

function UpsertMenu({ menu = { day1: [], day2: [], day3: [], day4: [], day5: [], day6: [], day7: [] } }) {
    const [recipes, setRecipes] = useState([]);
    const [tagList, setTagList] = useState({ tags: [] });

    const [chosenRecipe, setChosenRecipe] = useState('');
    const [typeOfMeal, setTypeOfMeal] = useState('');
    const [dayMenuError, setDayMenuError] = useState('');


    const [errors, setErrors] = useState({});

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
        const convertedValue = isNaN(value) ? value : parseInt(value, 10);
        setForm({
            ...form,
            [name]: convertedValue,
        });
        if (errors[name])
            setErrors({
                ...errors,
                [name]: null,
            });
    };

    const findFormErrors = () => {
        const { title} = form;
        const newErrors = {};
        if (!title || title === '') {
            newErrors.title = 'Title is required!';
        } else if (title.length > 60) {
            newErrors.title = 'Title is too long!';
        }
    
        return newErrors;
    };

    async function postForm(form) {
        await ApiQuery.post('menu', form);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            postForm(form);
            navigate(ROUTES_PATHS.USER_MENUS);
        }
    };

    function addMealToForm(day) {
        const formState = { ...form };

        formState.menu[day].push({
            mealType: typeOfMeal,
            recipe: chosenRecipe,
    });
        setForm(formState);
    }

    function handleAdditionRecipe(day) { 
        if(form.menu[day].length > 0){
            form.menu[day].map(recipe => {
                if(typeOfMeal === recipe.mealType){
                    setDayMenuError(true) 
                    setTimeout(() => {setDayMenuError(false)}, 3200)
                } else {
                addMealToForm(day);
                setDayMenuError(false)
                }
            })
        } else {
            addMealToForm(day)
        }
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
            <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    placeholder='Enter menu title'
                    name='title'
                    type='text'
                    onChange={setField}
                    isInvalid={!!errors.title}
                />
                <Form.Control.Feedback type='invalid'>{errors.title}</Form.Control.Feedback>
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
                                    {dayMenuError 
                                        ? 
                                        <span className='text-danger my-3 font-weight-bold text-center d-block'>
                                            {`You have already added this type of food for Day ${id + 1}`}
                                        </span>
                                        :
                                        null
                                        }
                                </Form.Group>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            <Button variant='light' type='submit' className='my-5 w-100' onClick={handleSubmit}>
                Submit
            </Button>
            </Form>
        </Container>
    );
}

export default UpsertMenu;