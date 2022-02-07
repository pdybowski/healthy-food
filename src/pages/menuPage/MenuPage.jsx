import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ApiQuery from '../../components/shared/api/ApiQuery';
import { Carousel, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import TimeFormatted from '../../components/shared/timeFormatted/TimeFormatted';
import { EditControls } from '../../components/shared/editControls/EditControls';
import { ROUTES_PATHS } from '../../routes';
import './menuPage.css';

function MenuPage(props) {
    const { isLoggedIn, isOwner } = props;

    const location = useLocation();

    const [menuData, setMenuData] = useState('');

    const fetchData = async () => {
        try {
            setMenuData((await ApiQuery.get(`menus/${location.state.id}`)).data);
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

    const {
        title,
        image, // menu
    } = menuData;

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
            <Carousel variant='dark'>
                {/*{Object.keys(menu).map((day, id) => {*/}
                {/*    const currentDay = `day${id + 1}`;*/}

                {/*    return (*/}
                {/*        <Carousel.Item key={id} indicators='false'>*/}
                {/*            <h2 className={'text-center'}>{`Day ${id + 1}`}</h2>*/}
                {/*            <div>Menu for day {currentDay}:</div>*/}
                {/*        </Carousel.Item>*/}
                {/*    );*/}
                {/*})}*/}
            </Carousel>
        </Container>
    );
}

export default MenuPage;
