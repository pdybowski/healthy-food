import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import UserRecipes from '../userRecipes/UserRecipes.jsx';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

function ProfileTabs(props) {
    const [key, setKey] = useState(props.tab);

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

                <Tab eventKey={PROFILE_TABS.PROFILE_MENUS} title='Your menus'>
                    Menus
                </Tab>
                <Tab eventKey={PROFILE_TABS.PROFILE_FAVORITES} title='Favorites'>
                    Favorites
                </Tab>
            </Tabs>
        </Container>
    );
}

function getRouteFromKey(key) {
    return routes.find((route) => route.key === key).path;
}

export const PROFILE_TABS = {
    PROFILE_RECIPES: 'user-recipes',
    PROFILE_MENUS: 'user-menus',
    PROFILE_FAVORITES: 'user-favorites',
};

export default ProfileTabs;
