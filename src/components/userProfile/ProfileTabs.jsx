import React, { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

function ProfileTabs() {
    const [key, setKey] = useState('user-recipes');

    return (
        <Container>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="user-recipes" title="Your recipes"></Tab>
                <Tab eventKey="user-menus" title="Your menus"></Tab>
                <Tab eventKey="user-favorites" title="Favorites"></Tab>
            </Tabs>
        </Container>
    );
}

export default ProfileTabs;
