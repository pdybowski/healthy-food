import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { EditControls } from '../../editControls/EditControls';
import { FavouriteIcon } from '../../favouriteIcon/FavouriteIcon';
import Tile from '../tile/tile';
import { Tags } from '../../tags/Tags';
import { ROUTES_PATHS } from '../../../../routes';
import { useNavigate } from 'react-router-dom';
import './recipeTile.css';
import TimeFormatted from '../../timeFormatted/TimeFormatted';

function RecipeTile({
    data,
    isFavourite,
    isLoggedIn,
    isOwner,
    title,
    itemTags,
    time,
    mealType,
    image = 'https://via.placeholder.com/100',
}) {
    const navigate = useNavigate();

    function handleShowRecipe() {
        navigate(`${ROUTES_PATHS.RECIPE.replace(':id', data.id)}`, { state: data });
    }

    return (
        <Tile>
            <Card.Img
                variant='top'
                src={image}
                onClick={handleShowRecipe}
                className='pe-auto card-image'
            />
            <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
            <Card.Body>
                <Card.Title className='text-dark card-title ' onClick={handleShowRecipe}>
                    {title}
                </Card.Title>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{itemTags && <Tags tagList={itemTags} />}</ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faClock} className='text-info' />
                        <span className='ms-1'>
                            Time: <TimeFormatted minutes={time} />
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        {`Type: ${mealType !== undefined ? mealType.join(', ') : ''}`}
                    </ListGroupItem>
                </ListGroup>
                <EditControls
                    isLoggedIn={isLoggedIn}
                    isOwner={isOwner}
                    url={ROUTES_PATHS.USER_RECIPES_ADD}
                />
            </Card.Body>
        </Tile>
    );
}

export default RecipeTile;
