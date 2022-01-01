import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Car from './pages/Car';
import NavbarEl from './components/Navbar';
import './assets/scss/main.scss';
import FooterEl from './components/Footer';

function App() {
  return (
    <Router>
      <NavbarEl />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car/:caId' element={<Car />} />
      </Routes>
      <FooterEl />
    </Router>
  );
}

export default App;
