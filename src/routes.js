import UserProfile from "./pages/UserProfile/UserProfile";
import {MainPage} from "./pages";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
    key: "main-page",
  },

  {
    path: "/user-profile",
    element: <UserProfile/>,
    key: "user-profile",
  },
];
