import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile.jsx';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import { ROUTES_PATHS } from '../../../../routes';

function UserMenus() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile buttonLabel={'Add new menu'} route={ROUTES_PATHS.USER_MENUS_ADD} />
                <MenuTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <MenuTile isFavourite={false} isLoggedIn={true} isOwner={true} />
                <MenuTile isFavourite={true} isLoggedIn={true} isOwner={true} />
            </Row>
        </Container>
    );
}

export default UserMenus;
