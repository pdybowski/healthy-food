import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import UserRecipes from './UserRecipes';

function ProfileTabs(props) {
    const [key, setKey] = useState(props.tab);

    return (
        <Container>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="user-recipes" title="Your recipes">
                    <UserRecipes />
                </Tab>

                <Tab eventKey="user-menus" title="Your menus">
                    Menus
                </Tab>
                <Tab eventKey="user-favorites" title="Favorites">
                    Favorites
                </Tab>
            </Tabs>
        </Container>
    );
}

export default ProfileTabs;
