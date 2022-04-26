import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../store/cars/actions';

import { Section } from '../../styles/Section'
import { Card } from '../../styles/Card'
import { ButtonOutline } from '../../styles/Buttons'
import CarGallery from '../../components/CarDetail/CarGallery';

const CarSection = ({car}) => {
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Dane Samochodu</h2>
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
                <Card>szczegóły</Card>
            </div>
            <Card>Rezerwacje</Card>
            <Card>Statystyki</Card>
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