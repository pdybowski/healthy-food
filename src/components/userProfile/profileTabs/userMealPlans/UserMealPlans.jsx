import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewItemTile from '../../../shared/tiles/newItemTile/NewItemTile';
import ApiQuery from '../../../shared/api/ApiQuery';
import { ROUTES_PATHS } from '../../../../routes';
import MealPlanTile from '../../../shared/tiles/mealPlanTile/MealPlanTile';

function UserMealPlans() {
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setMealPlans((await ApiQuery.get('mealPlans')).data);
        }

        fetchData();
    }, []);

    function removeMealPlan(mealPlanId) {
        setMealPlans((mealPlans) => mealPlans.filter((mealPlan) => mealPlan.id !== mealPlanId));
    }

    return (
        <Container className='my-4'>
            <Row xs={1} md={2} xxl={4} className='g-4'>
                <NewItemTile
                    buttonLabel={'Add new meal plan'}
                    route={ROUTES_PATHS.USER_MEAL_PLANS_ADD}
                />
                {mealPlans.map((mealPlan) => {
                    return (
                        <MealPlanTile
                            data={mealPlan}
                            title={mealPlan.title}
                            tags={mealPlan.tags}
                            key={mealPlan.id}
                            isFavourite={false}
                            isLoggedIn={true}
                            isOwner={true}
                            image={mealPlan.image}
                            id={mealPlan.id}
                            handleSave={removeMealPlan}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default UserMealPlans;
