import { Route, Routes } from 'react-router-dom';
import { protectedRoutes, routes } from './routes';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';

const Views = () => {
    return (
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
