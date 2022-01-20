import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuTile from '../../components/shared/tiles/menuTile/MenuTile';
import Search from '../../components/shared/search/Search';

function Menus() {
    return (
        <Container className='my-4'>
            <Search />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
                <MenuTile isFavourite={false} isLoggedIn={false} isOwner={false} />
            </Row>
        </Container>
    );
}

export default Menus;
