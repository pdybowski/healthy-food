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
                        // eslint-disable-next-line react/jsx-key
                        <Route {...route} />
                    ))}
                </Routes>
            </BrowserRouter>
            {/*<Footer />*/}
        </>
    );
}

export default App;
