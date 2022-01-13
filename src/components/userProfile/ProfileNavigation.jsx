import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function ProfileNavigation() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <LinkContainer to="/user-recipes">
                        <Nav.Link>Your recipes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/user-menus">
                        <Nav.Link>Your menus</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/user-favorites">
                        <Nav.Link>Favorites</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ProfileNavigation;
