import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import CarInfo from "../components/CarDetails/CarInfo";
import { Flex } from "@chakra-ui/react";
import CarGallery from "../components/CarDetails/CarGallery";
import CarServices from "../components/CarDetails/CarServices";

const Car = () => {
    const navigate = useNavigate()
    const params = useParams();
    const carId = params.id;
    const [car, setCar] = useState(null)
    useEffect(()=>{
        const getCar = async() => {
            try {
                const res = await api.get(`/cars/byId/${carId}`)
                setCar(res.data)
            } catch (error) {
                navigate('/404')
            }
        }
        getCar()
    },[])
    const update = data => {
        const updatedCar = {...car, ...data};
        setCar(updatedCar)
    }
    if(!car) return <Loader />
    return <Flex flexFlow={'column'} gap={'1.5rem'}>
        <CarInfo car={car} update={update} />
        <CarGallery car={car} update={update} />
        <CarServices car={car} update={update} />
    </Flex>
}

export default Car;