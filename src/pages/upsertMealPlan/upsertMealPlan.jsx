import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import { MEAL_TYPE } from '../upsertRecipe/UpsertRecipe';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../routes';
import { useNavigate } from 'react-router-dom';

import './upsertMealPlan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function UpsertMealPlan({
    mealPlan = { day1: [], day2: [], day3: [], day4: [], day5: [], day6: [], day7: [] },
}) {
    const [recipes, setRecipes] = useState([]);
    const [tagList, setTagList] = useState({ tags: [] });

    const [chosenRecipe, setChosenRecipe] = useState('');
    const [chosenRecipeId, setChosenRecipeId] = useState('');
    const [typeOfMeal, setTypeOfMeal] = useState('');
    const [dayMealPlanError, setDayMealPlanError] = useState('');

    const [errors, setErrors] = useState({});

    React.useEffect(() => {
        async function fetchData() {
            setRecipes((await ApiQuery.get('recipes')).data);
        }

        fetchData();
    }, []);

    const [form, setForm] = useState({
        mealPlan: {
            ...mealPlan,
        },
        tags: [],
        shopList: [],
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
        const { title } = form;
        const newErrors = {};
        if (!title || title === '') {
            newErrors.title = 'Title is required!';
        } else if (title.length > 60) {
            newErrors.title = 'Title is too long!';
        }

        return newErrors;
    };

    async function postForm(form) {
        await ApiQuery.post('mealPlans', form);
    }

    const navigate = useNavigate();

    const handleSubmitWithValidation = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            postForm(form);
            navigate(ROUTES_PATHS.USER_MEAL_PLANS);
        }
    };

    const previewFile = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.onload = (r) => {
            const formState = { ...form };
            formState.image = r.target.result;
            setForm(formState);
        };
        reader.readAsDataURL(files[0]);
    };

    const handleSetChosenRecipeId = (value) => {
        {
            recipes.map((recipe) => {
                if (value === recipe.title) {
                    setChosenRecipeId(recipe.id);
                }
            });
        }
    };

    function handleRecipeAddition(day) {
        const formState = { ...form };

        const addedRecipe = {
            mealType: typeOfMeal,
            recipe: chosenRecipe,
            id: chosenRecipeId,
        };

        if (
            formState.mealPlan[day].filter(
                (recipe) => recipe.mealType.toLowerCase() === addedRecipe.mealType.toLowerCase()
            ).length > 0
        ) {
            setDayMealPlanError(`You have already added this type of meal for this day.`);
            setTimeout(() => {
                setDayMealPlanError('');
            }, 3200);
        } else {
            formState.mealPlan[day].push(addedRecipe);
            setDayMealPlanError('');
        }
    }

    function handleRecipeDelete(e, day) {
        const formState = { ...form };

        formState.mealPlan[day] = formState.mealPlan[day].filter(
            (recipe) => recipe.recipe !== e.currentTarget.value
        );

        setForm(formState);

        if (formState.mealPlan[day].length === 0) {
            setDayMealPlanError('');
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
            <h2>Meal Plan</h2>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder='Enter meal plan title'
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
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='pictureInput' className='form-label'>
                        Image
                    </Form.Label>
                    <input
                        className='form-control'
                        type='file'
                        id='pictureInput'
                        onChange={previewFile}
                    />
                    {form.image && (
                        <img
                            className='mt-1'
                            src={form.image}
                            height='200'
                            alt='Image preview...'
                        />
                    )}
                </Form.Group>
                <Carousel variant='dark' interval={null}>
                    {Object.keys(form.mealPlan).map((day, id) => {
                        const currentDay = `day${id + 1}`;

                        return (
                            <Carousel.Item key={id} indicators='false' interval={null}>
                                <h2 className={'text-center'}>{`Day ${id + 1}`}</h2>
                                {form.mealPlan[currentDay].length > 0 && (
                                    <div>
                                        MealPlan for day {id + 1}:
                                        <ul>
                                            {form.mealPlan[currentDay].map(
                                                (mealPlanElement, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {`${mealPlanElement.mealType}: ${mealPlanElement.recipe}`}
                                                            <button
                                                                className='ms-4 py-1 border-0 bg-transparent'
                                                                value={mealPlanElement.recipe}
                                                                onClick={(e) =>
                                                                    handleRecipeDelete(
                                                                        e,
                                                                        currentDay
                                                                    )
                                                                }
                                                            >
                                                                <FontAwesomeIcon icon={faTimes} />
                                                            </button>
                                                        </li>
                                                    );
                                                }
                                            )}
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
                                            onChange={(e) => {
                                                setChosenRecipe(e.target.value);
                                                handleSetChosenRecipeId(e.target.value);
                                            }}
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
                                    {dayMealPlanError && (
                                        <Form.Control.Feedback className='d-block' type='invalid'>
                                            {dayMealPlanError}
                                        </Form.Control.Feedback>
                                    )}
                                    <Button
                                        variant='primary'
                                        type='button'
                                        className='w-25 my-3 button-custom'
                                        onClick={() => {
                                            if (typeOfMeal === '') return false;
                                            if (chosenRecipe === '') return false;

                                            handleRecipeAddition(currentDay);
                                            setTypeOfMeal('');
                                            setChosenRecipe('');
                                            setChosenRecipeId('');
                                        }}
                                    >
                                        Add meal to my meal plan
                                    </Button>
                                </Form.Group>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <Button
                    variant='light'
                    type='submit'
                    className='my-5 w-100'
                    onClick={(e) => handleSubmitWithValidation(e)}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default UpsertMealPlan;
