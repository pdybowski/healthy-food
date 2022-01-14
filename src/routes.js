import UserProfile from './pages/UserProfile/UserProfile.jsx';
import { MainPage } from './pages';

export const routes = [
    {
        path: '/',
        element: <MainPage />,
        key: 'main-page',
    },

    {
        path: '/user-profile',
        element: <UserProfile tab={'user-recipes'} />,
        key: 'user-profile',
    },
    {
        path: '/user-profile/recipes',
        element: <UserProfile tab={'user-recipes'} />,
        key: 'user-profile-recipes',
    },
    {
        path: '/user-profile/menus',
        element: <UserProfile tab={'user-menus'} />,
        key: 'user-profile-menus',
    },
    {
        path: '/user-profile/favorites',
        element: <UserProfile tab={'user-favorites'} />,
        key: 'user-profile-favorites',
    },
];
