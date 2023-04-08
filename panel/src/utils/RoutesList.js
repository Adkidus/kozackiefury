import {
    Route,
    Routes,
} from "react-router-dom";
import { Outlet } from 'react-router';
import ProtectedRoute from "./ProtectedRoute";
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const RoutesList = () => {
    return <Routes>
        <Route element={<Outlet />}>
            <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />} >
            <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
}

export default RoutesList;