import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MealPlanTile from '../../components/shared/tiles/mealPlanTile/MealPlanTile';
import Search from '../../components/shared/search/Search';
import ApiQuery from '../../components/shared/api/ApiQuery';

function MealPlans() {
    const [mealPlans, setMealPlans] = useState([]);
    const [input, setInput] = useState('');

    const fetchData = async () => {
        try {
            setMealPlans((await ApiQuery.get('mealPlans')).data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateInput = async (input) => {
        setInput(input);
    };

    return (
        <Container className='my-4'>
            <Search input={input} onChange={updateInput} />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                {mealPlans
                    .filter((mealPlan) => {
                        if (input === '') {
                            return mealPlan;
                        } else if (mealPlan.title.toLowerCase().includes(input.toLowerCase())) {
                            return mealPlan;
                        }
                    })
                    .map((mealPlan) => {
                        return (
                            <MealPlanTile
                                data={mealPlan}
                                title={mealPlan.title}
                                tags={mealPlan.tags}
                                isFavourite={false}
                                isLoggedIn={false}
                                isOwner={false}
                                image={mealPlan.image}
                                key={mealPlan.id}
                                id={mealPlan.id}
                            />
                        );
                    })}
            </Row>
        </Container>
    );
}

export default MealPlans;
