import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user-circle-solid.png';
import plus from '../../../assets/images/plus.png';
import { ROUTES_PATHS } from '../../../routes';

export function Navigation({ isLoggedIn = false }) {
    const [active, setActive] = useState('');

    const NAV_ELEMENTS = {
        RECIPES: 'recipes',
        MENUS: 'menus',
        RECOMMENDED: 'recommended',
        CONTACT: 'contact',
        ABOUT: 'about',
    };

    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Container>
                <LinkContainer
                    to={ROUTES_PATHS.MAIN_PAGE}
                    onClick={() => {
                        setActive('');
                    }}
                >
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
                        <LinkContainer
                            to={ROUTES_PATHS.RECIPES}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.RECIPES);
                            }}
                            className={
                                active === NAV_ELEMENTS.RECIPES
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>Recipes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={ROUTES_PATHS.MENUS}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.MENUS);
                            }}
                            className={
                                active === NAV_ELEMENTS.MENUS
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>Menus</Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={ROUTES_PATHS.RECOMMENDED}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.RECOMMENDED);
                            }}
                            className={
                                active === NAV_ELEMENTS.RECOMMENDED
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>Recommended</Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={ROUTES_PATHS.CONTACT}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.CONTACT);
                            }}
                            className={
                                active === NAV_ELEMENTS.CONTACT
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={ROUTES_PATHS.ABOUT}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.ABOUT);
                            }}
                            className={
                                active === NAV_ELEMENTS.ABOUT
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                {isLoggedIn && (
                    <Navbar.Collapse className='justify-content-end'>
                        <NavDropdown
                            title={<img src={plus} height='24' alt='Plus Icon' />}
                            className='navigation__element--largescreen-show'
                        >
                            <LinkContainer
                                to={ROUTES_PATHS.USER_RECIPES_ADD}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Add recipe</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_MENUS_ADD}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
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
                                    onClick={() => {
                                        setActive('');
                                    }}
                                >
                                    <NavDropdown.Item>
                                        Signed in as:<span className='fw-bold'> Jakub Nowak</span>
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </div>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_PROFILE}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Your profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_RECIPES}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Your recipes</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_MENUS}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Your menus</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer
                                to={ROUTES_PATHS.USER_FAVORITES}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Favourites</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider className='navigation__element--mobilescreen-show' />
                            <div className='navigation__element--mobilescreen-show'>
                                <LinkContainer
                                    to={ROUTES_PATHS.USER_RECIPES_ADD}
                                    onClick={() => {
                                        setActive('');
                                    }}
                                >
                                    <NavDropdown.Item>Add recipe</NavDropdown.Item>
                                </LinkContainer>
                            </div>
                            <div className='navigation__element--mobilescreen-show'>
                                <LinkContainer
                                    to={ROUTES_PATHS.USER_MENUS_ADD}
                                    onClick={() => {
                                        setActive('');
                                    }}
                                >
                                    <NavDropdown.Item>Add menu</NavDropdown.Item>
                                </LinkContainer>
                            </div>
                            <NavDropdown.Divider />
                            <LinkContainer
                                to={ROUTES_PATHS.LOGOUT}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Log Out</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Navbar.Collapse>
                )}
                {!isLoggedIn && (
                    <div className='d-flex flex-row'>
                        <LinkContainer
                            to={ROUTES_PATHS.MAIN_PAGE}
                            onClick={() => {
                                setActive('');
                            }}
                        >
                            <Nav.Link className='border border-primary rounded'>Sign In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to={ROUTES_PATHS.MAIN_PAGE}
                            onClick={() => {
                                setActive('');
                            }}
                        >
                            <Nav.Link className='ms-2 border border-primary rounded bg-primary text-dark'>
                                Register
                            </Nav.Link>
                        </LinkContainer>
                    </div>
                )}
            </Container>
        </Navbar>
    );
}
