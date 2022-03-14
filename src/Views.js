import { Route, Routes } from 'react-router-dom';
import { protectedRoutes, routes } from './routes';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';
import { useAppContext } from './appContext';
import { Spinner } from 'react-bootstrap';

const Views = () => {
    const { isLoading } = useAppContext();

    return isLoading ? (
        <Spinner animation={'border'}>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    ) : (
        <Routes>
            {routes.map((route) => (
                <Route {...route} /> // eslint-disable-line react/jsx-key
            ))}
            <Route element={<ProtectedRoutes />}>
                {protectedRoutes.map((route) => (
                    <Route {...route} /> // eslint-disable-line react/jsx-key
                ))}
            </Route>
        </Routes>
    );
};

export default Views;
