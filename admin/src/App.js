import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Outlet } from 'react-router';
import Dashboard from "./pages/Dashboard";
import Asks from "./pages/Asks";
import Reservations from "./pages/Reservations";
import CarsList from "./pages/Cars/CarsList";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import CarNew from "./pages/Cars/CarNew";
import LoginPage from "./pages/LoginPage";
import TeamNew from "./pages/TeamNew";

import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { authStart } from './store/auth/actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WithoutNav = () => <Outlet />;

const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  if(!auth.loading && auth.currentUser == null && auth.authError === null)
    dispatch(authStart());
  return auth.loading ? <div>LOADING</div> : auth.currentUser ? children : <Navigate to='/login' />
}

export default function App() {
  return (
    <Provider store={store}>
      <Div>
        <Router>
          <Routes>
            <Route element={<WithoutNav />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/" element={
              <ProtectedRoute>
                <Sidebar />
                <Dashboard />
              </ProtectedRoute>
            }/>
            <Route path="cars" element={
              <ProtectedRoute>
                <Sidebar />
                <CarsList />
              </ProtectedRoute>
            }/>
            <Route path="cars/new" element={
              <ProtectedRoute>
                <Sidebar />
                <CarNew />
              </ProtectedRoute>
            }/>
            <Route path="reservations" element={
              <ProtectedRoute>
                <Sidebar />
                <Reservations />
              </ProtectedRoute>
            }/>
            <Route path="asks" element={
              <ProtectedRoute>
                <Sidebar />
                <Asks />
              </ProtectedRoute>
            }/>
            <Route path="team" element={
              <ProtectedRoute>
                <Sidebar />
                <Team />
              </ProtectedRoute>
            }/>
            <Route path="team/new" element={
              <ProtectedRoute>
                <Sidebar />
                <TeamNew />
              </ProtectedRoute>
            }/>
            <Route path="settings" element={
              <ProtectedRoute>
                <Sidebar />
                <Settings />
              </ProtectedRoute>
            }/>
          <Route path='/*' element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Div>
      <ToastContainer limit={3} />
    </Provider>
  );
}

const Div = styled.div`
  position: relative;
`;
