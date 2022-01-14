import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Navigation from './components/shared/Navigation/Navigation.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    {routes.map((route) => (
                        <Route key={routes.key} {...route} />
                    ))}
                </Routes>
            </BrowserRouter>
            {/*<Footer />*/}
        </>
    );
}

export default App;
