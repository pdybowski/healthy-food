import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './Navigation.css'
import {LinkContainer} from 'react-router-bootstrap'

import logo from "../../../assets/images/logo.png"
import user from "../../../assets/images/user-circle-solid.png"
import plus from "../../../assets/images/plus.png"

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            height="44"
                            className="d-inline-block align-top"
                            alt="Healthy App logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <LinkContainer to="/recipes"><Nav.Link>Recipes</Nav.Link></LinkContainer>
                        <LinkContainer to="/recommended"><Nav.Link>Recommended</Nav.Link></LinkContainer>
                        <LinkContainer to="/menu"><Nav.Link>Menu</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown
                        title={<img
                            src={plus}
                            height="24"
                            alt="Plus Icon"
                        />} className="mobile-hide">
                        <LinkContainer to="/user-recipes-new"><NavDropdown.Item>Add
                            recipe</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/user-menu-new"><NavDropdown.Item>Add
                            menu</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <NavDropdown
                        title={<><img
                            src={user}
                            height="24"
                            alt="User Icon"
                        /></>}>

                        <div><LinkContainer to="/user-profile" className="mobile-hide"><NavDropdown.Item>Signed in
                            as:<span
                                className="fw-bold"> Jakub Nowak</span></NavDropdown.Item></LinkContainer></div>
                        <LinkContainer to="/user-profile"><NavDropdown.Item>Your
                            profile</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/user-recipes"><NavDropdown.Item>Your
                            recipes</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/user-menus"><NavDropdown.Item>Your
                            menus</NavDropdown.Item></LinkContainer>
                        <LinkContainer
                            to="/user-favorites"><NavDropdown.Item>Favorites</NavDropdown.Item></LinkContainer>
                        <NavDropdown.Divider className="not-mobile-hide"/>
                        <div className="not-mobile-hide"><LinkContainer to="/user-recipes-new"><NavDropdown.Item>Add
                            recipe</NavDropdown.Item></LinkContainer></div>
                        <div className="not-mobile-hide"><LinkContainer className="not-mobile-hide" to="/user-menu-new"><NavDropdown.Item>Add
                            menu</NavDropdown.Item></LinkContainer></div>
                        <NavDropdown.Divider/>
                        <LinkContainer to="/"><NavDropdown.Item>Log Out</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;