import React from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeTile from '../../components/shared/tiles/recipeTile/RecipeTile';
import Search from '../../components/shared/search/Search';

function Recommended() {
    return (
        <Container className='my-4'>
            <Search />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <RecipeTile
                    isFavourite={true}
                    title={'Spaghetti bolognese'}
                    time={'40'}
                    mealType={['DINNER']}
                    isLoggedIn={true}
                    itemTags={['easy', 'fast']}
                    isRecommended={true}
                    counts={'125'}
                ></RecipeTile>
                <RecipeTile
                    isFavourite={true}
                    title={'Omelette'}
                    time={'15'}
                    isLoggedIn={true}
                    mealType={['BREAKFAST']}
                    itemTags={['fast']}
                    isRecommended={true}
                    counts={'100'}
                ></RecipeTile>
                <RecipeTile
                    isFavourite={true}
                    title={'Baked potatoes'}
                    time={'60'}
                    mealType={['DINNER']}
                    isLoggedIn={true}
                    itemTags={['vege', 'easy']}
                    isRecommended={true}
                    counts={'85'}
                ></RecipeTile>
            </Row>
        </Container>
    );
}

export default Recommended;
