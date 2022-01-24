import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditRecipe() {
    const [recipe, setRecipe] = useState('');
    const [description, setDescription] = useState('');
    const [form, setForm] = useState({});
    // const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return (
        <Form>
            <h2>Recipe</h2>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter recipe title'
                    onChange={(e) => setField('title', e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Tags</Form.Label>
                <div className='d-flex flex-row'>
                    <Form.Control
                        type='text'
                        placeholder='Enter tag'
                        onChange={(e) => setField('tags', e.target.value)}
                    />
                    <FontAwesomeIcon icon={faPlus} className='text-primary' />
                </div>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Time to prepare [min]</Form.Label>
                <Form.Control type='number' onChange={(e) => setField('time', e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Meal type</Form.Label>
                <Form.Check type='checkbox' label='Breakfast' />
                <Form.Check type='checkbox' label='Lunch' />
                <Form.Check type='checkbox' label='Dinner' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Ingredients </Form.Label>
                <div className='d-flex flex-row'>
                    <Form.Control
                        className='me-3'
                        type='text'
                        onChange={(e) => setField('ingredients-name', e.target.value)}
                    />
                    <Form.Control
                        className='me-3'
                        type='number'
                        onChange={(e) => setField('ingredients-number', e.target.value)}
                    />
                    <Form.Select aria-label='pcs'>
                        <option value='kg'>kg</option>
                        <option value='ml'>ml</option>
                        <option value='pcs'>pcs</option>
                    </Form.Select>
                </div>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
                <ReactQuill theme='snow' value={description} onChange={setDescription} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Recipe</Form.Label>
                <ReactQuill theme='snow' value={recipe} onChange={setRecipe} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='formFile' className='form-label'>
                    Image
                </Form.Label>
                <input className='form-control' type='file' id='formFile' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>People number</Form.Label>
                <Form.Control
                    type='number'
                    onChange={(e) => setField('people-number', e.target.value)}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    );
}

export default EditRecipe;
