import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { Carousel, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import TimeFormatted from '../../components/shared/timeFormatted/TimeFormatted';
import { EditControls } from '../../components/shared/editControls/EditControls';
import { ROUTES_PATHS } from '../../routes';
import './menuPage.css';
import RecipeTile from '../../components/shared/tiles/recipeTile/RecipeTile';

function MenuPage(props) {
    const { isLoggedIn, isOwner } = props;

    const location = useLocation();

    const [menuData, setMenuData] = useState('');
    const [recipes, setRecipes] = useState();

    const fetchData = async () => {
        try {
            setMenuData((await ApiQuery.get(`menus/${location.state.id}`)).data);
            setRecipes((await ApiQuery.get('recipes')).data);
        } catch (err) {
            if (err.response) {
                console.error(err.response.data);
                console.error(err.response.status);
                console.error(err.response.headers);
            } else {
                console.error(`Error: ${err.message}`);
            }
        }
    };

    const { title, image, menu } = menuData;

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container className='mt-4'>
            <h2>{title}</h2>
            <div className='row'>
                {image && <img src={image} alt='recipe-image' className='col mt-3' />}
                <div className='col mt-3'>
                    <div className='border border-light rounded-2 p-3'>
                        <div className='mt-2'>
                            <span className='fw-bold'>
                                <FontAwesomeIcon icon={faClock} className='text-info' />
                                <span> Avg/day to prepare: </span>
                            </span>
                            <TimeFormatted minutes='40' />
                        </div>
                        <EditControls
                            isLoggedIn={isLoggedIn}
                            isOwner={isOwner}
                            url={ROUTES_PATHS.USER_MENUS_ADD}
                            endpoint={'menus'}
                            id={location.state.id}
                        />
                    </div>
                </div>
            </div>
            {menu && recipes && (
                <Carousel variant='dark' className='mt-4'>
                    {Object.keys(menu).map((day, id) => {
                        return (
                            <Carousel.Item key={id} indicators='false'>
                                <h2 className={'text-center'}>{`Day ${id + 1}`}</h2>
                                <Row xs={1} md={2} xxl={3} className='g-4'>
                                    {menu[`day${id + 1}`].map((meal, id) => {
                                        return (
                                            <div key={id} className='pt-3'>
                                                <h4 className='text-center'>{meal.mealType}</h4>
                                                {recipes.map((recipe) => {
                                                    if (meal.id === recipe.id) {
                                                        return (
                                                            <RecipeTile
                                                                data={recipe}
                                                                title={recipe.title}
                                                                itemTags={recipe.tags}
                                                                time={recipe.timeToPrepare}
                                                                mealType={recipe.mealType}
                                                                key={recipe.id}
                                                                isFavourite={false}
                                                                isLoggedIn={false}
                                                                isOwner={false}
                                                                image={recipe.image}
                                                                id={recipe.id}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                        );
                                    })}
                                </Row>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )}
        </Container>
    );
}

export default MenuPage;
