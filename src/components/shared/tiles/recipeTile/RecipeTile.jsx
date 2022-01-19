import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { EditControls } from '../../editControls/EditControls';
import { FavouriteIcon } from '../../favouriteIcon/FavouriteIcon';
import Tile from '../tile/tile';
import { Tags } from '../../tags/Tags';

function RecipeTile({
    isFavourite,
    isLoggedIn,
    isOwner,
    tags = ['Default tag 1', 'Default dsdsdsdsdsdsdtag 1', 'Default tag 2', 'd 1', 'tag 2'],
}) {
    return (
        <Tile>
            <Card.Img variant='top' src='https://via.placeholder.com/100' />
            <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
            <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{tags && <Tags tagList={tags} />}</ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faClock} className='text-info' />
                        <span className='ms-1'>Time</span>
                    </ListGroupItem>
                    <ListGroupItem>Type</ListGroupItem>
                </ListGroup>
                <EditControls isLoggedIn={isLoggedIn} isOwner={isOwner} />
            </Card.Body>
        </Tile>
    );
}

export default RecipeTile;
