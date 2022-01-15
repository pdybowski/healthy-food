import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuTile from '../menuTile/MenuTile.jsx';

function UserMenus() {
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                {/*<NewMenuTile />*/}
                <MenuTile />
            </Row>
        </Container>
    );
}

export default UserMenus;
