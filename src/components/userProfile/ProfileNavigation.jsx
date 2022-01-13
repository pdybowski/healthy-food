import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


function ProfileNavigation() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Your recipes</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Your menus</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Favorites</Nav.Link></LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default ProfileNavigation;


