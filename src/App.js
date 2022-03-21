import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/shared';
import { Footer } from './components/mainPage/footer/Footer';
import AccountForm from './components/accountForm/accountForm.jsx';
import Views from './Views';
import { ApiProvider } from './contexts/apiContext';
import ApiQuery from './components/shared/api/ApiQuery';
import LoadingSpinner from './components/shared/loadingSpinner/LoadingSpinner';
import { UserProvider } from './contexts/userContext';
import { checkIfLoggedIn } from './utils/checkLoggedIn';
import { LS_TOKEN, LS_USER_DATA } from './constants/localStorage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const keysToRemove = [LS_TOKEN, LS_USER_DATA];

    const [isLoading, setIsLoading] = useState(true);
    const [pageResource, setPageResource] = useState({
        mealPlans: [],
        recipes: [],
    });

    const fetchData = async () => {
        try {
            const { data } = await ApiQuery.get('api/pageResource');
            setPageResource(data);
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
        keysToRemove.forEach((key) => localStorage.removeItem(key));
    };

    checkIfLoggedIn(setIsLoggedIn);

    return (
        <>
            <BrowserRouter>
                <UserProvider>
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
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <ApiProvider value={{ pageResource }}>
                            <Views />
                        </ApiProvider>
                    )}
                </UserProvider>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
