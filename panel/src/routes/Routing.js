import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authStart } from '../store/auth/actions';
import ProtectedRoute from '../routes/ProtectedRoute';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Sidebar from "../components/sidebar";
import Settings from "../pages/settings";
import Team from "../pages/team";
import CalendarEvents from "../pages/calendar";
import Cars from "../pages/cars";
import Car from "../pages/car";
import CarNew from "../pages/carNew";
import NotFound from "../pages/notFound";
import Help from "../pages/help";

const Routing = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const dispathAuth = () => {
        if(!auth.loading && auth.currentUser == null && auth.authError === null)
        dispatch(authStart());
    }
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
          path: "/",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Dashboard />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cars",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Cars />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/car/new",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<CarNew />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/car/:id",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Car />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/calendar",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<CalendarEvents />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/team",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Team />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/settings",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Settings />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/help",
          loader: () => {
            dispathAuth()
            return null;
          },
          element: (
            <ProtectedRoute>
                <Sidebar children={<Help />} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/*",
          element: <NotFound />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Routing;