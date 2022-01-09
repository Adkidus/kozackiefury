import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import NavbarEl from './components/navbar'
import Header from './components/header'
import CarsList from './pages/CarsList';
import NewCar from './pages/NewCar';
import CarEdit from './pages/CarEdit';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <NavbarEl />
        <Container>
        <Header />
          <Routes>
            <Route path="/" element={<CarsList />} />
            <Route path="/flota" element={<CarsList />} />
            <Route path="/dodaj-auto" element={<NewCar />} />
            <Route path="/auto/:carId" element={<CarEdit />} />
          </Routes>
        </Container>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
