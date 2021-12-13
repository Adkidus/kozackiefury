import React from 'react';

const TimeItem = ({time, name}) => {
    return (<div className="timer-el">
        <div className="time">{time}</div>
        <div>{name}</div>
    </div>)
}

export default TimeItem;