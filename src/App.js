import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Navigation from './components/shared/Navigation/Navigation.jsx';

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
