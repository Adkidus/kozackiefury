import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loader from "../components/Loader";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    return auth.loading ? <Loader /> : auth.currentUser ? children : <Navigate to='/login' />
};

export default ProtectedRoute;