import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user-circle-solid.png';
import plus from '../../../assets/images/plus.png';
import { ROUTES_PATHS } from '../../../routes';

export function Navigation({ isLoggedIn, onRegister, onSignIn, onLogOut }) {
    const [active, setActive] = useState('');

    const NAV_ELEMENTS = {
        RECIPES: 'recipes',
        MEAL_PLANS: 'mealPlans',
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
                            to={ROUTES_PATHS.MEAL_PLANS}
                            onClick={() => {
                                setActive(NAV_ELEMENTS.MEAL_PLANS);
                            }}
                            className={
                                active === NAV_ELEMENTS.MEAL_PLANS
                                    ? 'navigation__element active'
                                    : 'navigation__element inactive'
                            }
                        >
                            <Nav.Link>Meal plans</Nav.Link>
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
                                to={ROUTES_PATHS.USER_MEAL_PLANS_ADD}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Add meal plan</NavDropdown.Item>
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
                                to={ROUTES_PATHS.USER_MEAL_PLANS}
                                onClick={() => {
                                    setActive('');
                                }}
                            >
                                <NavDropdown.Item>Your meal plans</NavDropdown.Item>
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
                                    to={ROUTES_PATHS.USER_MEAL_PLANS_ADD}
                                    onClick={() => {
                                        setActive('');
                                    }}
                                >
                                    <NavDropdown.Item>Add meal plan</NavDropdown.Item>
                                </LinkContainer>
                            </div>
                            <NavDropdown.Divider />
                            <LinkContainer
                                to={ROUTES_PATHS.LOGOUT}
                                onClick={() => {
                                    setActive('');
                                }}
                                className={'btn btn-primary'}
                            >
                                <NavDropdown.Item onClick={onLogOut}>Log Out</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Navbar.Collapse>
                )}
                {!isLoggedIn && (
                    <div className='d-flex flex-row'>
                        <Button
                            to={ROUTES_PATHS.REGISTER}
                            onClick={() => {
                                setActive('');
                            }}
                            className={'btn btn-primary mx-3'}
                        >
                            <Nav.Link
                                className='text-dark py-0 px-2'
                                // onClick={showModalHandler}
                                onClick={onRegister}
                            >
                                Register
                            </Nav.Link>
                        </Button>
                        <Button
                            to={ROUTES_PATHS.MAIN_PAGE}
                            onClick={() => {
                                setActive('');
                            }}
                            className={'btn bg-white border border-primary rounded'}
                        >
                            <Nav.Link className='py-1 px-2' onClick={onSignIn}>
                                Sign In
                            </Nav.Link>
                        </Button>
                    </div>
                )}
            </Container>
        </Navbar>
    );
}
