import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile.jsx';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';

function UserMenus() {
    const menuList = [
        {
            id: '1',
            isFavourite: false,
            isLoggedIn: true,
            isOwner: true,
            key: '1',
            handleSave: removeMenu,
        },
        {
            id: '2',
            isFavourite: false,
            isLoggedIn: true,
            isOwner: true,
            key: '2',
            handleSave: removeMenu,
        },
        {
            id: '3',
            isFavourite: true,
            isLoggedIn: true,
            isOwner: true,
            key: '3',
            handleSave: removeMenu,
        },
    ];
    const [menus, setMenus] = useState(menuList);
    function removeMenu(menuId) {
        setMenus((menus) => menus.filter((menu) => menu.id !== menuId));
    }

    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile buttonLabel={'Add new menu'} />
                {menus.map((menu) => (
                    <MenuTile {...menu} /> // eslint-disable-line react/jsx-key
                ))}
            </Row>
        </Container>
    );
}

export default UserMenus;
