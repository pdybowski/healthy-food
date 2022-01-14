import { MainPage } from './pages';
import UserProfile from './pages/UserProfile/UserProfile';

export const routes = [
    {
        path: '/',
        element: <MainPage />,
        key: 'main-page',
    },

    {
        path: '/user-profile',
        element: <UserProfile />,
        key: 'user-profile',
    },
];
