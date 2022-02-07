import { MainPage, UserProfile } from './pages';
import Recipes from './pages/recipes/Recipes';
import Menus from './pages/menus/Menus';
import UpsertRecipe from './pages/upsertRecipe/UpsertRecipe';
import UpsertMenu from './pages/upsertMenu/upsertMenu';
import RecipePage from './pages/recipePage/RecipePage';
import Recommended from './pages/recommended/Recommended';
import AccountForm from './components/accountForm/accountForm';
import MenuPage from './pages/menuPage/MenuPage';

export const ROUTES_PATHS = {
    MAIN_PAGE: '/healthy-food',
    RECIPES: '/recipes',
    RECOMMENDED: '/recommended',
    MENUS: '/menus',
    CONTACT: '/contact',
    ABOUT: '/about',
    LOGOUT: '/',
    USER_PROFILE: '/user-profile',
    USER_RECIPES: '/user-profile/recipes',
    USER_RECIPES_ADD: '/user-profile/recipes/new',
    USER_RECIPES_EDIT: '/user-profile/recipes/edit',
    USER_MENUS: '/user-profile/menus',
    USER_MENUS_ADD: '/user-profile/menus/new',
    USER_FAVORITES: '/user-profile/favourites',
    USER_SETTINGS: '/user-profile/settings',
    RECIPE: '/recipes/:id',
    MENU: '/menus/:id',
    REGISTER: '/register',
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
    {
        path: ROUTES_PATHS.RECOMMENDED,
        element: <Recommended />,
        key: 'recommended',
    },
    {
        path: ROUTES_PATHS.RECIPE,
        element: <RecipePage />,
        key: 'recipe',
    },
    {
        path: ROUTES_PATHS.MENU,
        element: <MenuPage />,
        key: 'menu',
    },
    {
        path: ROUTES_PATHS.REGISTER,
        element: <AccountForm.jsx />,
        key: 'register',
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
    {
        path: ROUTES_PATHS.USER_RECIPES_ADD,
        element: <UpsertRecipe />,
        key: 'upsert-recipe',
    },
    {
        path: ROUTES_PATHS.USER_MENUS_ADD,
        element: <UpsertMenu />,
        key: 'upsert-menu',
    },
    {
        path: ROUTES_PATHS.USER_SETTINGS,
        element: <UserProfile />,
        key: 'user-settings',
    },
];
