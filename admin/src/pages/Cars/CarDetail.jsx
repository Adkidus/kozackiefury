import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../store/cars/actions';

export default function CarDetail(){
    const dispatch = useDispatch();
    const params = useParams();
    const carId = params.id
    const cars = useSelector((state) => state.cars);
    useEffect(()=>{
        if(!cars.selectedCar)
            dispatch(getCar({carId:carId}))
    },[cars, dispatch, carId])
    return <div style={{color:'#fff'}}>CarDetail</div>
}