import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function ProfileSubNavigation() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to="/user-recipes-new">
                            <Nav.Link>Add recipe</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/user-menu-new">
                            <Nav.Link>Add menu</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ProfileSubNavigation;
