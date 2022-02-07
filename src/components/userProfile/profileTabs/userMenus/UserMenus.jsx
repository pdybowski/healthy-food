import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import ApiQuery from '../../../shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../../../routes';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile';

function UserMenus() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setMenus((await ApiQuery.get('menus')).data);
        }

        fetchData();
    }, []);

    function removeMenu(menuId) {
        setMenus((menus) => menus.filter((menu) => menu.id !== menuId));
    }

    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile buttonLabel={'Add new menu'} route={ROUTES_PATHS.USER_MENUS_ADD} />
                {menus.map((menu) => {
                    return (
                        <MenuTile
                            data={menu}
                            title={menu.title}
                            tags={menu.tags}
                            key={menu.id}
                            isFavourite={false}
                            isLoggedIn={true}
                            isOwner={true}
                            image={menu.image}
                            id={menu.id}
                            handleSave={removeMenu}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default UserMenus;
