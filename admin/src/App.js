import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Asks from "./pages/Asks";
import Reservations from "./pages/Reservations";
import CarsList from "./pages/Cars/CarsList";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import CarNew from "./pages/Cars/CarNew";

export default function App() {
  return (
    <Div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="cars" element={<CarsList />}/>
          <Route path='cars/new' element={<CarNew />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="asks" element={<Asks />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
