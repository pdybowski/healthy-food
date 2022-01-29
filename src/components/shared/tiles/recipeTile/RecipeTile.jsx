import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { EditControls } from '../../editControls/EditControls';
import { FavouriteIcon } from '../../favouriteIcon/FavouriteIcon';
import Tile from '../tile/tile';
import { Tags } from '../../tags/Tags';
import { ROUTES_PATHS } from '../../../../routes';

function RecipeTile({
    isFavourite,
    isLoggedIn,
    isOwner,
    title,
    itemTags,
    time,
    mealType,
    image = 'https://via.placeholder.com/100',
}) {
    return (
        <Tile>
            <Card.Img variant='top' src={image} />
            <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{itemTags && <Tags tagList={itemTags} />}</ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faClock} className='text-info' />
                        <span className='ms-1'>{`Time: ${time}min`}</span>
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
