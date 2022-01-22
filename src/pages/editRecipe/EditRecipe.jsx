import React from 'react';
import { Container } from 'react-bootstrap';
import EditOrAddRecipe from '../../components/editRecipe/EditOrAddRecipe';

function EditRecipe() {
    return <Container className='my-4'>{<EditOrAddRecipe />}</Container>;
}

export default EditRecipe;
