import './App.css';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TimeItem from './TimeItem';

const App = () => {
  let timerInterval;
  const [timeToEnd, setTimeToEnd] = useState([{name: 'dni', time: 0},{name: 'godzin', time: 0},{name: 'minut', time: 0},{name: 'sekund', time: 0}])

  const finalDate = '12/18/2021 12:00';
  const counterDown = () => {
    let end = new Date(finalDate);
    let now = new Date();
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let distance = end - now;
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    let currentData = [{name: 'dni', time: days},{name: 'godzin', time: hours},{name: 'minut', time: minutes},{name: 'sekund', time: seconds}]
    setTimeToEnd(currentData);
  }

  const timer = () => {
    timerInterval = !timerInterval && setInterval(() => counterDown(), 1000);
  }

  useEffect(() => {
    timer()
    return () => clearInterval(timerInterval)
  }, [])
  

  return (
    <div className="main">
      <h1>KOZACKIE FURY</h1>
      <h3>JESTEŚMY CORAZ BLIŻEJ !!!</h3>
      <div className="timer">
        {timeToEnd.map(e => <TimeItem name={e.name} time={e.time} />)}
      </div>
      <div className="contact">
        <div>
          <FontAwesomeIcon icon={faPhone} className="mr-icon" />
          <a href="tel:+48608310315" className="link">(+48) 608-310-315</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="mr-icon" />
          <a href="mailto:jedyne@kozackiefury.pl" className="link">jedyne@kozackiefury.pl</a>
        </div>
      </div>
    </div>
  );
}

export default App;
