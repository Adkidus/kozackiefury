import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authStart } from '../store/auth/actions';
import RoutesList from "./RoutesList";

const Routing = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
  
    if(!auth.loading && auth.currentUser == null && auth.authError === null)
      dispatch(authStart());

    return <Router>
        <RoutesList />
    </Router>
}

export default Routing;