import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/shared';
import { Footer } from './components/mainPage/footer/Footer';
import AccountForm from './components/accountForm/accountForm.jsx';
import Views from './Views';

function App() {
    const [isLoggedIn, setIsLoggin] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [isNewUser, setIsNewUser] = React.useState(false);

    const onSignInHandler = (e) => {
        e.preventDefault();
        setIsNewUser(false);
        setModalShow(!modalShow);
    };

    const onRegisterClick = () => {
        setModalShow(!modalShow);
        setIsNewUser(!isNewUser);
    };

    const onSignInClick = () => {
        setModalShow(!modalShow);
        setIsNewUser(false);
    };

    const onPositiveLogIn = () => {
        setIsLoggin(true);
        setModalShow(!modalShow);
    };

    const onLogOut = () => {
        setIsLoggin(false);
    };

    return (
        <>
            <BrowserRouter>
                <Navigation
                    isLoggedIn={isLoggedIn}
                    onRegister={onRegisterClick}
                    onSignIn={onSignInClick}
                    onLogOut={onLogOut}
                />
                <AccountForm
                    isCentered={true}
                    isModalShown={modalShow}
                    closeModal={() => setModalShow(false)}
                    newUserHandler={() => setIsNewUser(!isNewUser)}
                    handleSave={onSignInHandler}
                    isNewUser={isNewUser}
                    onLogIn={onPositiveLogIn}
                />
                <Views />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
