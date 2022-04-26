import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../store/cars/actions';

import { Section } from '../../styles/Section'
import { Card } from '../../styles/Card'
import { ButtonOutline } from '../../styles/Buttons'
import CarGallery from '../../components/CarDetail/CarGallery';
import CarDetails from '../../components/CarDetail/CarDetails';
import CarReservations from '../../components/CarDetail/CarReservations';
import CarStats from '../../components/CarDetail/CarStats';

const CarSection = ({car}) => {
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Sczegóły</h2>
                </div>
                <Link to='/cars'>
                    <ButtonOutline>
                        Powrót
                    </ButtonOutline>
                </Link>
            </div>
        </Card>
        <div className='grid'>
            <div className='row__one'>
                <CarGallery images={car.photos} />
                <CarDetails car={car} />
            </div>
            <CarReservations />
            <CarStats />
        </div>
    </Section>
}

export default function CarDetail(){
    const dispatch = useDispatch();
    const params = useParams();
    const carId = params.id
    const cars = useSelector((state) => state.cars);
    useEffect(()=>{
        if(!cars.selectedCar)
            dispatch(getCar({carId:carId}))
    },[cars, dispatch, carId])
    return cars.selectedCar ? <CarSection car={cars.selectedCar} /> : '';
}