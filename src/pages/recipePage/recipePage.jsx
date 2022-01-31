import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function RecipePage() {
    const location = useLocation();
    // const {
    //     title,
    //     author,
    // tags,
    // timeToPrepare,
    // mealType, // ingredients,
    // description,
    // recipe, // image,
    // peopleNumber,
    // } = location.state;

    return (
        <Container>
            <h2>{location.state.title}</h2>
            {/*<div>{tags}</div>*/}
            {/*<div>Time to prepare: {timeToPrepare}</div>*/}
            {/*{peopleNumber > 1 ? (*/}
            {/*    <div> For: {peopleNumber} people </div>*/}
            {/*) : peopleNumber === 1 ? (*/}
            {/*    <div> For: {peopleNumber} person </div>*/}
            {/*) : null}*/}
            {/*<div>Meal types: {mealType}</div>*/}
            {/*<div>{description}</div>*/}
            {/*<div>{recipe}</div>*/}
            {/*<div>Author: {location.state.author}</div>*/}
        </Container>
    );
}

export default RecipePage;
