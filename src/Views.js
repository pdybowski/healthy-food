import { Route, Routes } from 'react-router-dom';
import { PROFILE_TABS } from './routes';
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoute';
import { MainPage, UserProfile } from './pages';
import Menus from './pages/menus/Menus';
import Recipes from './pages/recipes/Recipes';
import { ROUTES_PATHS } from './routes';

const Views = () => {
    return (
        <Routes>
            <Route path={ROUTES_PATHS.MAIN_PAGE} element={<MainPage />} key={'main-page'} />
            <Route element={<ProtectedRoutes />}>
                <Route
                    path={ROUTES_PATHS.USER_PROFILE}
                    element={<UserProfile tab={PROFILE_TABS.PROFILE_RECIPES} />}
                    key={PROFILE_TABS.PROFILE_RECIPES}
                />
                <Route
                    path={ROUTES_PATHS.USER_RECIPES}
                    element={<UserProfile tab={PROFILE_TABS.PROFILE_RECIPES} />}
                    key={PROFILE_TABS.PROFILE_RECIPES}
                />
                <Route
                    path={ROUTES_PATHS.USER_MENUS}
                    element={<UserProfile tab={PROFILE_TABS.PROFILE_MENUS} />}
                    key={PROFILE_TABS.PROFILE_MENUS}
                />
                <Route
                    path={ROUTES_PATHS.USER_FAVORITES}
                    element={<UserProfile tab={PROFILE_TABS.PROFILE_FAVOURITES} />}
                    key={PROFILE_TABS.PROFILE_FAVOURITES}
                />
            </Route>
            <Route path={ROUTES_PATHS.RECIPES} element={<Recipes />} key={'recipes'} />
            <Route path={ROUTES_PATHS.MENUS} element={<Menus />} key={'menus'} />
        </Routes>
    );
};

export default Views;
