import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import ApiQuery from '../../../shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../../../routes';
import MenuTile from '../../../shared/tiles/menuTile/MenuTile';

function UserMealPlans() {
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setMealPlans((await ApiQuery.get('mealPlans')).data);
        }

        fetchData();
    }, []);

    function removeMenu(menuId) {
        setMealPlans((mealPlans) => mealPlans.filter((menu) => menu.id !== menuId));
    }

    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile
                    buttonLabel={'Add new menu'}
                    route={ROUTES_PATHS.USER_MEAL_PLANS_ADD}
                />
                {mealPlans.map((menu) => {
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

export default UserMealPlans;
