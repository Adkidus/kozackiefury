import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarsSliderItem from './CarsSliderItem';
// const API_URL = 'http://localhost:5000/';
const API_URL = 'https://api.kozackiefury.pl/';

const CarsSlider = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}cars/list`)
        .then(res => {
            setCars(res.data);
        })
    }, [])
    
    return(<>
        {cars.map(car => <CarsSliderItem id={car._id} car={car} />)}
    </>)
}

export default CarsSlider;