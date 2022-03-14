import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/shared';
import { Footer } from './components/mainPage/footer/Footer';
import AccountForm from './components/accountForm/accountForm.jsx';
import Views from './Views';
import { AppContext, AppProvider } from './appContext';
import ApiQuery from './components/shared/api/ApiQuery';
import { Spinner } from 'react-bootstrap';

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [isNewUser, setIsNewUser] = React.useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const { setPageResource } = useContext(AppContext);

    const fetchData = async () => {
        try {
            const pageResource = (await ApiQuery.get('api/pageResource')).data;
            setPageResource(pageResource);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        setIsLoggedIn(true);
        setModalShow(!modalShow);
    };

    const onLogOut = () => {
        setIsLoggedIn(false);
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
                <AppProvider>
                    {isLoading ? (
                        <Spinner animation={'border'}>
                            <span className='visually-hidden'>Loading...</span>
                        </Spinner>
                    ) : (
                        <Views />
                    )}
                </AppProvider>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
