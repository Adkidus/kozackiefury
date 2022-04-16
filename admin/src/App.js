import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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

const WithoutNav = () => <Outlet />

export default function App() {
  return (
    <Div>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<Sidebar />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="cars" element={<CarsList />}/>
            <Route path='cars/new' element={<CarNew />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="asks" element={<Asks />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
