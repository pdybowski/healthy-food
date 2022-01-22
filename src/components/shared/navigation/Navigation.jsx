import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user-circle-solid.png';
import plus from '../../../assets/images/plus.png';
import { ROUTES_PATHS } from '../../../routes';

export function Navigation() {
    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Container>
                <LinkContainer to={ROUTES_PATHS.MAIN_PAGE}>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            height='44'
                            className='d-inline-block align-top'
                            alt='Healthy App logo'
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <LinkContainer to={ROUTES_PATHS.RECIPES}>
                            <Nav.Link>Recipes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.MENUS}>
                            <Nav.Link>Menus</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.RECOMMENDED}>
                            <Nav.Link>Recommended</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.CONTACT}>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.ABOUT}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                    <NavDropdown
                        title={<img src={plus} height='24' alt='Plus Icon' />}
                        className='navigation__element--largescreen-show'
                    >
                        <LinkContainer to={ROUTES_PATHS.USER_RECIPES_EDIT}>
                            <NavDropdown.Item>Add recipe</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.USER_MENUS_ADD}>
                            <NavDropdown.Item>Add menu</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown
                        className='nav-link'
                        title={
                            <>
                                <img src={user} height='24' alt='User Icon' />
                                <span className='navigation__element--mobilescreen-show ms-3 navbar-text navbar-light'>
                                    Signed in as:<span className='fw-bold'> Jakub Nowak</span>
                                </span>
                            </>
                        }
                    >
                        <div>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_PROFILE}
                                className='navigation__element--largescreen-show'
                            >
                                <NavDropdown.Item>
                                    Signed in as:<span className='fw-bold'> Jakub Nowak</span>
                                </NavDropdown.Item>
                            </LinkContainer>
                        </div>
                        <LinkContainer to={ROUTES_PATHS.USER_PROFILE}>
                            <NavDropdown.Item>Your profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.USER_RECIPES}>
                            <NavDropdown.Item>Your recipes</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.USER_MENUS}>
                            <NavDropdown.Item>Your menus</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={ROUTES_PATHS.USER_FAVORITES}>
                            <NavDropdown.Item>Favourites</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider className='navigation__element--mobilescreen-show' />
                        <div className='navigation__element--mobilescreen-show'>
                            <LinkContainer to={ROUTES_PATHS.USER_RECIPES_EDIT}>
                                <NavDropdown.Item>Add recipe</NavDropdown.Item>
                            </LinkContainer>
                        </div>
                        <div className='navigation__element--mobilescreen-show'>
                            <LinkContainer to={ROUTES_PATHS.USER_MENUS_ADD}>
                                <NavDropdown.Item>Add menu</NavDropdown.Item>
                            </LinkContainer>
                        </div>
                        <NavDropdown.Divider />
                        <LinkContainer to={ROUTES_PATHS.LOGOUT}>
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
