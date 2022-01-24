import { MainPage, UserProfile } from './pages';
import Recipes from './pages/recipes/Recipes';
import Menus from './pages/menus/Menus';

export const ROUTES_PATHS = {
    MAIN_PAGE: '/',
    RECIPES: '/recipes',
    RECOMMENDED: '/recommended',
    MENUS: '/menus',
    CONTACT: '/contact',
    ABOUT: '/about',
    LOGOUT: '/',
    USER_PROFILE: '/user-profile',
    USER_RECIPES: '/user-profile/recipes',
    USER_RECIPES_ADD: '/user-profile/recipes/new',
    USER_MENUS: '/user-profile/menus',
    USER_MENUS_ADD: '/user-profile/menus/new',
    USER_FAVORITES: '/user-profile/favourites',
};

export const PROFILE_TABS = {
    PROFILE_RECIPES: 'user-recipes',
    PROFILE_MENUS: 'user-menus',
    PROFILE_FAVOURITES: 'user-favourites',
};

export const routes = [
    {
        path: ROUTES_PATHS.MAIN_PAGE,
        element: <MainPage />,
        key: 'main-page',
    },

    {
        path: ROUTES_PATHS.RECIPES,
        element: <Recipes />,
        key: 'recipes',
    },
    {
        path: ROUTES_PATHS.MENUS,
        element: <Menus />,
        key: 'menus',
    },
];

export const protectedRoutes = [
    {
        path: ROUTES_PATHS.USER_PROFILE,
        element: <UserProfile tab={PROFILE_TABS.PROFILE_RECIPES} />,
        key: 'user-profile',
    },
    {
        path: ROUTES_PATHS.USER_RECIPES,
        element: <UserProfile tab={PROFILE_TABS.PROFILE_RECIPES} />,
        key: PROFILE_TABS.PROFILE_RECIPES,
    },
    {
        path: ROUTES_PATHS.USER_MENUS,
        element: <UserProfile tab={PROFILE_TABS.PROFILE_MENUS} />,
        key: PROFILE_TABS.PROFILE_MENUS,
    },
    {
        path: ROUTES_PATHS.USER_FAVORITES,
        element: <UserProfile tab={PROFILE_TABS.PROFILE_FAVOURITES} />,
        key: PROFILE_TABS.PROFILE_FAVOURITES,
    },
];
