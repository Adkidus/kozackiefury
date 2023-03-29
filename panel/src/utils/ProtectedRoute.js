import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { authStart } from '../store/auth/actions';

// const ProtectedRoute = ({children}) => {
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // if(!auth.loading && auth.currentUser == null && auth.authError === null)
    //   dispatch(authStart());
//     return auth.loading ? <div>LOADING</div> : auth.currentUser ? children : <Navigate to='/login' />
// }

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;

    // if(!auth.loading && auth.currentUser == null && auth.authError === null)
    //     dispatch(authStart());

    // return children;
};

export default ProtectedRoute;