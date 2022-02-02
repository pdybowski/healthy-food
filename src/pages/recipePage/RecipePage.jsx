import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { EditControls } from '../../components/shared/editControls/EditControls';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import TimeFormatted from '../../components/shared/timeFormatted/TimeFormatted';
import { ROUTES_PATHS } from '../../routes';

function RecipePage(props) {
    const { isLoggedIn, isOwner } = props;

    const location = useLocation();
    console.log(location.state.id);

    const [recipeData, setRecipeData] = useState('');

    const fetchData = async () => {
        try {
            setRecipeData((await ApiQuery.get(`recipes/${location.state.id}`)).data);
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

    const {
        title,
        timeToPrepare,
        peopleNumber,
        mealType = [],
        description,
        recipe,
        image,
        ingredients,
    } = recipeData;

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container className='mt-4'>
            <h2>{title}</h2>
            <div className='row'>
                {image && <img src={image} alt='recipe-image' className='col mt-3' />}
                <div className='col mt-3'>
                    <div className='border border-light rounded-2 p-3'>
                        <div className='mt-2'>
                            <span className='fw-bold'>
                                <FontAwesomeIcon icon={faClock} className='text-info' />
                                <span> Time to prepare: </span>
                            </span>
                            <TimeFormatted minutes={timeToPrepare} />
                        </div>
                        {peopleNumber > 1 ? (
                            <div className='mt-2'>
                                <span className='fw-bold'>
                                    <FontAwesomeIcon icon={faUser} className='text-info' />
                                    <span> For: </span>
                                </span>
                                {peopleNumber} people
                            </div>
                        ) : peopleNumber === 1 ? (
                            <div className='mt-2'>
                                <span className='fw-bold'>For: </span>
                                {peopleNumber} person
                            </div>
                        ) : null}
                        <div className='mt-2'>
                            <span className='fw-bold'>Meal types: </span>
                            {mealType.map((type, i) => {
                                return (
                                    <span key={i}>
                                        {type}
                                        {i !== mealType.length - 1 ? ', ' : ''}
                                    </span>
                                );
                            })}
                        </div>
                        <EditControls
                            isLoggedIn={isLoggedIn}
                            isOwner={isOwner}
                            url={ROUTES_PATHS.USER_RECIPES_ADD}
                            endpoint={'recipes'}
                            id={location.state.id}
                        />
                    </div>
                </div>
            </div>
            <div
                className='mt-3 border-bottom pb-3'
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <h3 className='mt-3 fw-bold'>Ingredients:</h3>
            <div className='mt-2 pb-3 border-bottom'>
                <ul>
                    {ingredients &&
                        ingredients.map((ingredient, id) => {
                            return (
                                <li key={id}>
                                    {`${ingredient.title}, ${ingredient.quantity.number} ${ingredient.quantity.unit}`}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <h3 className='mt-3 fw-bold'>Directions:</h3>
            <div className='mt-2 pb-3' dangerouslySetInnerHTML={{ __html: recipe }} />
        </Container>
    );
}

export default RecipePage;
