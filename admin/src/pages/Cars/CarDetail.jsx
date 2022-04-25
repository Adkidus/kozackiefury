import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CarDetail(){
    // const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    let car = {...cars.selectedCar}
    console.log(car)
    return <div style={{color:'#fff'}}>CarDetail</div>
}