import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Navigation } from './components/shared';
import AccountForm from './components/accountForm/accountForm';
import { Footer } from './components/mainPage/Footer/Footer';

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <BrowserRouter>
                <Navigation onClickRegForm={() => setModalShow(true)} />
                <AccountForm show={modalShow} onHide={() => setModalShow(false)} />
                <Routes>
                    {routes.map((route) => (
                        <Route {...route} /> // eslint-disable-line react/jsx-key
                    ))}
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
