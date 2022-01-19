import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Navigation } from './components/shared';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    {routes.map((route) => (
                        <Route {...route} /> // eslint-disable-line react/jsx-key
                    ))}
                </Routes>
            </BrowserRouter>
            {/*<Footer />*/}
        </>
    );
}

export default App;
