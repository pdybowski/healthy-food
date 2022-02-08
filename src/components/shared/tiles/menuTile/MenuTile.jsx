import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FavouriteIcon } from '../../favouriteIcon/FavouriteIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { EditControls } from '../../editControls/EditControls';
import Tile from '../tile/tile';
import { Tags } from '../../tags/Tags';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATHS } from '../../../../routes';
import placeholder from '../../../../assets/images/menu-placeholder.png';
import './menuTile.css';

function MenuTile(props) {
    const { isFavourite, isLoggedIn, isOwner, title, tags, id, image, data, handleSave } = props;

    const navigate = useNavigate();

    function handleShowMenu() {
        navigate(`${ROUTES_PATHS.MENU.replace(':id', data.id)}`, { state: data });
    }

    return (
        <Tile id={id}>
            <Card.Img
                variant='top'
                src={image && true ? image : placeholder}
                style={{ width: '100%', height: '17rem', objectFit: 'cover' }}
                onClick={handleShowMenu}
                className='pe-auto card-image'
            />
            <FavouriteIcon isFavourite={isFavourite} isLoggedIn={isLoggedIn} />
            <Card.Body>
                <Card.Title className='text-dark card-title ' onClick={handleShowMenu}>
                    {title}
                </Card.Title>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{tags && <Tags tagList={tags} />}</ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faClock} className='text-info' />
                        <span className='ms-1'>{`Time avg/day: ${'40 mins'}`}</span>
                    </ListGroupItem>
                </ListGroup>
                <EditControls
                    isLoggedIn={isLoggedIn}
                    isOwner={isOwner}
                    endpoint={'mealPlans'}
                    id={id}
                    handleSave={handleSave}
                />
            </Card.Body>
        </Tile>
    );
}

export default MenuTile;
