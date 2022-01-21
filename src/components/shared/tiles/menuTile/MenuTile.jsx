import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FavouriteIcon } from '../../favouriteIcon/FavouriteIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { EditControls } from '../../editControls/EditControls';
import Tile from '../tile/tile';
import { Tags } from '../../tags/Tags';

function MenuTile({ isFavourite, isLoggedIn, isOwner, tags = ['Default tag 1'] }) {
    return (
        <Tile>
            <Card.Img variant='top' src='https://via.placeholder.com/100' />
            <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
            <Card.Body>
                <Card.Title>Menu Title</Card.Title>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{tags && <Tags tagList={tags} />}</ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faClock} className='text-info' />
                        <span className='ms-1'>Time avg/day</span>
                    </ListGroupItem>
                </ListGroup>
                <EditControls isLoggedIn={isLoggedIn} isOwner={isOwner} />
            </Card.Body>
        </Tile>
    );
}

export default MenuTile;
