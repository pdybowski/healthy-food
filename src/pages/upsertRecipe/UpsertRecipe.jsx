import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';

import { TagsEdit } from '../../components/shared/tags/TagsEdit';
import Container from 'react-bootstrap/Container';

function UpsertRecipe() {
    const [recipe, setRecipe] = useState('');
    const [description, setDescription] = useState('');
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [tags, setTags] = useState([]);

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    const setField = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
        if (errors[name])
            setErrors({
                ...errors,
                [name]: null,
            });
    };

    const findFormErrors = () => {
        const { title, time } = form;
        const newErrors = {};
        if (!title || title === '') newErrors.title = 'Title is required!';
        else if (title.length > 60) newErrors.title = 'Title is too long!';
        if (!time || time === '') newErrors.time = 'Time is required!';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert('Success!');
        }
    };

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
                            tags={tags}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            inputFieldPosition='bottom'
                        />
                    </div>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Time to prepare [min]</Form.Label>
                    <Form.Control
                        name='time'
                        type='number'
                        onChange={setField}
                        isInvalid={!!errors.time}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.time}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3 required'>
                    <Form.Label>Meal type</Form.Label>
                    <Form.Check type='checkbox' defaultChecked label='Breakfast' />
                    <Form.Check type='checkbox' label='Lunch' />
                    <Form.Check type='checkbox' label='Dinner' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='me-3'>Ingredients</Form.Label>
                    <div className='d-flex flex-row'>
                        <FloatingLabel label='Name' className='me-3'>
                            <Form.Control
                                name='ingredient-name'
                                type='text'
                                placeholder='Name'
                                onChange={setField}
                            />
                        </FloatingLabel>
                        <FloatingLabel label='Quantity' className='me-3'>
                            <Form.Control
                                name='ingredients-number'
                                type='number'
                                placeholder='Quantity'
                                onChange={setField}
                            />
                        </FloatingLabel>
                        <Form.Select aria-label='pcs' className='me-3'>
                            <option value='kg'>kg</option>
                            <option value='ml'>ml</option>
                            <option value='pcs'>pcs</option>
                        </Form.Select>
                        <Button variant='primary'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <ReactQuill
                        name='description'
                        theme='snow'
                        value={description}
                        onChange={setDescription}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Recipe</Form.Label>
                    <ReactQuill name='recipe' theme='snow' value={recipe} onChange={setRecipe} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='formFile' className='form-label'>
                        Image
                    </Form.Label>
                    <input className='form-control' type='file' id='formFile' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>People number</Form.Label>
                    <Form.Control name='people-number' type='number' onChange={setField} />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default UpsertRecipe;
