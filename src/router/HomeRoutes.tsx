import { UserManagement } from "../components/pages/UserManagement";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/home/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/home/setting",
    exact: false,
    children: <Setting />
  }
];
