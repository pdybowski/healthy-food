import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Banner() {
    return (
        <main className='banner-container'>
            <Container>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faUtensils} size='3x' color='#f2a22c' />
                    </Col>
                    <Col
                        xs={12}
                        className='text-light d-flex justify-content-center text-uppercase'
                    >
                        <h1 className='banner-title '>Healthy Food</h1>
                    </Col>
                </Row>
                <Row className='banner'>
                    <Col xs={12} md={4} />
                    <Col
                        xs={12}
                        md={4}
                        className='text-light d-flex justify-content-center banner-slogan-container bg-primary text-uppercase font-weight-bold'
                    >
                        <p className='banner-slogan'>Your place to plan meals</p>
                    </Col>
                    <Col xs={12} md={4} />
                </Row>
                <Row>
                    <Col className='text-light d-flex justify-content-center'>
                        <h4 className='banner-description'>How it works?</h4>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <Col xs={12} md={3} className='banner-card'>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Search for recipes</Accordion.Header>
                                <Accordion.Body>
                                    Search for healthy and tasty recipes of different cuisiness and
                                    preferred ingredients
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={12} md={3} className='banner-card'>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Add your recipes</Accordion.Header>
                                <Accordion.Body>
                                    Add your favorite recipes to always have them in one place and
                                    easily share them with the others
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={12} md={3} className='banner-card'>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Plan your meals</Accordion.Header>
                                <Accordion.Body>
                                    Choose your favorite recipes, save them and create your personal
                                    meal plan for one day or a whole week
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={12} md={3} className='banner-card'>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Generate shopping list</Accordion.Header>
                                <Accordion.Body>
                                    Easily generate a shopping list of all necessary products
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Banner;
