import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function EditRecipe() {
    return (
        <Form>
            <h2>Recipe</h2>
            <Form.Group className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder='Enter recipe title' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Tags</Form.Label>
                <div className='d-flex flex-row'>
                    <Form.Control placeholder='Enter tag' />
                    <FontAwesomeIcon icon={faPlus} className='text-primary' />
                </div>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>timeToPrepare</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Meal type</Form.Label>
                <Form.Check type='checkbox' label='Breakfast' />
                <Form.Check type='checkbox' label='Lunch' />
                <Form.Check type='checkbox' label='Dinner' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>ingredients </Form.Label>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Recipe</Form.Label>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='formFile' className='form-label'>
                    Image
                </Form.Label>
                <input className='form-control' type='file' id='formFile' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>People number</Form.Label>
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    );
}

export default EditRecipe;
