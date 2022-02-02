import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import Container from 'react-bootstrap/Container';
import ReactQuill from 'react-quill';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../routes';
import { useLocation, useNavigate } from 'react-router-dom';

function UpsertRecipe() {
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [ingredientUnit, setIngredientUnit] = useState('');
    const [ingredientError, setIngredientError] = useState('');

    const location = useLocation();

    const [form, setForm] = useState();

    const fetchData = async () => {
        try {
            const formData = (await ApiQuery.get(`recipes/${location.state.id}`)).data;
            setForm({
                id: formData.id,
                title: formData.title,
                tags: formData.tags,
                timeToPrepare: formData.timeToPrepare,
                mealType: formData.mealType,
                ingredients: formData.ingredients,
                description: formData.description,
                recipe: formData.recipe,
                image: formData.image,
                peopleNumber: formData.peopleNumber,
            });
        } catch (err) {
            if (err.response) {
                console.error(err.response.data);
                console.error(err.response.status);
                console.error(err.response.headers);
            } else {
                console.error(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [tagList, setTagList] = useState({ tags: [] });

    const [errors, setErrors] = useState({});

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
        const { title, minutes, mealType, recipe } = form;
        const newErrors = {};
        if (!title || title === '') {
            newErrors.title = 'Title is required!';
        } else if (title.length > 60) {
            newErrors.title = 'Title is too long!';
        }
        if (!minutes || minutes === '') {
            newErrors.minutes = 'Time is required!';
        }
        if (mealType.length === 0) {
            newErrors.mealType = 'At least one meal type is required!';
        }
        if (recipe === '' || recipe === '<p><br></p>') {
            newErrors.recipe = 'Recipe is required!';
        }

        return newErrors;
    };

    async function postForm(form) {
        await ApiQuery.post('recipes', form);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            postForm(form);
            navigate(ROUTES_PATHS.USER_RECIPES);
        }
    };

    function handleCheckbox({ target: { value, checked } }) {
        const formState = { ...form };

        checked
            ? formState.mealType.push(value)
            : (formState.mealType = formState.mealType.filter((mealType) => mealType !== value));

        setForm(formState);
    }

    function handleRecipeChange(value) {
        setField({ target: { name: 'recipe', value } });
    }

    function handleDescriptionChange(value) {
        setField({ target: { name: 'description', value } });
    }

    function handleIngredientAddition() {
        const formState = { ...form };
        const ingredient = {
            title: ingredientName,
            quantity: { number: parseInt(ingredientQuantity, 10), unit: ingredientUnit },
        };

        if (
            formState.ingredients.filter(
                (i) => i.title.toLowerCase() === ingredient.title.toLowerCase()
            ).length > 0
        ) {
            setIngredientError('This ingredient already exist!');
        } else {
            formState.ingredients.push(ingredient);
            setIngredientError('');
        }

        setIngredientName('');
        setIngredientQuantity('');
        setIngredientUnit('-- Select One --');

        setForm(formState);
    }

    function handleIngredientDelete(e) {
        const formState = { ...form };

        formState.ingredients = formState.ingredients.filter(
            (ingredient) => ingredient.title !== e.currentTarget.value
        );

        setForm(formState);

        if (formState.ingredients.length === 0) {
            setIngredientError('');
        }
    }

    function previewFile(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.onload = (r) => {
            const formState = { ...form };
            formState.image = r.target.result;
            setForm(formState);
        };
        reader.readAsDataURL(files[0]);
    }

    return (
        <Container className='my-4'>
            <Form>
                <h2>Recipe</h2>
                <Form.Group className='mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name='title'
                        type='text'
                        placeholder='Enter recipe title'
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
                    <Form.Label>Time to prepare [min]</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter time to prepare in minutes'
                        onChange={setField}
                        isInvalid={!!errors.timeToPrepare}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.timeToPrepare}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Meal type</Form.Label>
                    <Form.Check
                        type='checkbox'
                        onChange={handleCheckbox}
                        label='Breakfast'
                        value={MEAL_TYPE.BREAKFAST}
                    />
                    <Form.Check
                        type='checkbox'
                        onChange={handleCheckbox}
                        label='Lunch'
                        value={MEAL_TYPE.LUNCH}
                    />
                    <Form.Check
                        type='checkbox'
                        onChange={handleCheckbox}
                        label='Dinner'
                        value={MEAL_TYPE.DINNER}
                    />
                    {errors.mealType && (
                        <Form.Control.Feedback className='d-block' type='invalid'>
                            {errors.mealType}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='me-3'>Ingredients</Form.Label>
                    {form.ingredients && form.ingredients.length > 0 && (
                        <div>
                            <ul>
                                {form.ingredients.map((ingredient) => {
                                    return (
                                        <li key={ingredient.title}>
                                            {`${ingredient.title} (${ingredient.quantity.number} ${ingredient.quantity.unit})`}
                                            <button
                                                className='ms-4 py-1 border-0 bg-transparent'
                                                value={ingredient.title}
                                                onClick={handleIngredientDelete}
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    {ingredientError && (
                        <Form.Control.Feedback className='d-block' type='invalid'>
                            {ingredientError}
                        </Form.Control.Feedback>
                    )}
                    <div className='d-flex flex-row'>
                        <FloatingLabel label='Name' className='me-3'>
                            <Form.Control
                                value={ingredientName}
                                name='ingredient-name'
                                type='text'
                                placeholder='Name'
                                onInput={(e) => setIngredientName(e.target.value)}
                            />
                        </FloatingLabel>
                        <FloatingLabel label='Quantity' className='me-3'>
                            <Form.Control
                                value={ingredientQuantity}
                                name='ingredient-quantity'
                                type='number'
                                placeholder='Quantity'
                                onInput={(e) => setIngredientQuantity(e.target.value)}
                            />
                        </FloatingLabel>
                        <Form.Select
                            aria-label='pcs'
                            className='me-3'
                            onChange={(e) => setIngredientUnit(e.target.value)}
                            value={ingredientUnit}
                        >
                            <option value=''>-- Select one --</option>
                            {Object.keys(INGREDIENT_UNIT).map((key) => {
                                return (
                                    <option key={key} value={INGREDIENT_UNIT[key]}>
                                        {INGREDIENT_UNIT[key]}
                                    </option>
                                );
                            })}
                        </Form.Select>
                        <Button variant='primary'>
                            <FontAwesomeIcon icon={faPlus} onClick={handleIngredientAddition} />
                        </Button>
                    </div>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <ReactQuill
                        name='description'
                        theme='snow'
                        value={form.description}
                        onChange={handleDescriptionChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Recipe</Form.Label>
                    <ReactQuill
                        isDelta={true}
                        name='recipe'
                        theme='snow'
                        value={form.recipe}
                        onChange={handleRecipeChange}
                    />
                    {errors.recipe && (
                        <Form.Control.Feedback className='d-block' type='invalid'>
                            {errors.recipe}
                        </Form.Control.Feedback>
                    )}
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
                <Form.Group className='mb-3'>
                    <Form.Label>People number</Form.Label>
                    <Form.Control
                        name='peopleNumber'
                        type='number'
                        onChange={setField}
                        placeholder='Enter for how many people the recipe is'
                    />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export const MEAL_TYPE = {
    BREAKFAST: 'BREAKFAST',
    LUNCH: 'LUNCH',
    DINNER: 'DINNER',
};

const INGREDIENT_UNIT = {
    KG: 'kg',
    ML: 'ml',
    PCS: 'pcs',
    TABLESPOON: 'tablespoon',
    CUP: 'cup',
    PINCH: 'pinch',
    SLICE: 'slice',
};

export default UpsertRecipe;
