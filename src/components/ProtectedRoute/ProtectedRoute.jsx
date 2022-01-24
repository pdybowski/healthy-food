import { Navigate, Outlet } from 'react-router-dom';
// import { MainPage } from '../../pages';

const useAuth = () => {
    // temp logic for route protection applied to all user paths
    const user = { loggedIn: true };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
