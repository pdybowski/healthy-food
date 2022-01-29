import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/shared';
import { Footer } from './components/mainPage/Footer/Footer';
import AccountForm from './components/AccountForm/AccountForm.jsx';
import Views from './Views';

function App() {
    const [isLoggedIn, setIsLoggin] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [isNewUser, setIsNewUser] = React.useState(false);

    const onSignInHandler = (e) => {
        setIsNewUser(false);
        e.preventDefault();
    };

    const onRegisterClick = () => {
        setModalShow(!modalShow);
        setIsNewUser(true);
    };

    const onSignInClick = () => {
        setModalShow(!modalShow);
        setIsNewUser(false);
    }

    return (
        <>
            <BrowserRouter>
                <Navigation
                    isLoggedIn={isLoggedIn}
                    onRegister={onRegisterClick}
                    onSignIn={onSignInClick}
                />
                <AccountForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    newUserHandler={() => setIsNewUser(!isNewUser)}
                    onFormSubmit={onSignInHandler}
                    isNewUser={isNewUser}
                />
                <Views />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
