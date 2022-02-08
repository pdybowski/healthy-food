import React, { useEffect, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import UserRecipes from './userRecipes/UserRecipes.jsx';
import { useNavigate } from 'react-router-dom';
import { PROFILE_TABS, protectedRoutes } from '../../../routes';
import UserMealPlans from './userMealPlans/UserMealPlans.jsx';
import Favourites from './favorites/Favourites.jsx';

function ProfileTabs({ tab = PROFILE_TABS.PROFILE_RECIPES }) {
    const [key, setKey] = useState(tab);

    useEffect(() => setKey(tab), [tab]);

    const navigate = useNavigate();
    return (
        <Container>
            <Tabs
                activeKey={key}
                onSelect={(eventKey) => {
                    navigate(getRouteFromKey(eventKey));
                    setKey(eventKey);
                }}
            >
                <Tab eventKey={PROFILE_TABS.PROFILE_RECIPES} title='Your recipes'>
                    <UserRecipes />
                </Tab>

                <Tab eventKey={PROFILE_TABS.PROFILE_MEAL_PLANS} title='Your meal plans'>
                    <UserMealPlans />
                </Tab>
                <Tab eventKey={PROFILE_TABS.PROFILE_FAVOURITES} title='Favourites'>
                    <Favourites />
                </Tab>
            </Tabs>
        </Container>
    );
}

function getRouteFromKey(key) {
    return protectedRoutes.find((route) => route.key === key).path;
}

export default ProfileTabs;
