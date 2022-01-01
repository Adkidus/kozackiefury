import React, {useState,useEffect} from 'react'
import axios from 'axios';

const API_URL = 'https://api.kozackiefury.pl/';

const Car = () => {
    const [car, setCar] = useState()
    useEffect(() => {
        axios.get(`${API_URL}cars/`)
        .then(res => {
            setCar(res.data);
        })
    }, [])
    return(<>
        Single Car
    </>)
}

export default Car;