import {Flex, Text} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { CarContext } from '../../providers/CarContext';

const CarSummaryDetails = () => {
    const {carData, setCarData} = useContext(CarContext);
    const [car, setCar] = useState('')
    useEffect(()=>{
        if(carData?.details)
        setCar(carData.details)
    },[carData, setCarData]) // eslint-disable-line react-hooks/exhaustive-deps
    return <Flex flexFlow={'column'} gap={'1rem'}>
        <Flex flexFlow={'column'}>
            <Text>Kategoria</Text>
            <Text color={'rgb(163, 130, 58)'}>{car.category || 'brak'}</Text>
        </Flex>
        <Flex flexFlow={'row'} gap={'1rem'}>
            <Flex flex={1} flexFlow={'column'}>
                <Text>Marka</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.brand || 'brak'}</Text>
            </Flex>
            <Flex flex={1} flexFlow={'column'}>
                <Text>Model</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.model || 'brak'}</Text>
            </Flex>
        </Flex>
        <Flex flexFlow={'row'} gap={'1rem'}>
            <Flex flex={1} flexFlow={'column'}>
                <Text>Moc</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.horse_power || 'brak'}</Text>
            </Flex>
            <Flex flex={1} flexFlow={'column'}>
                <Text>Silnik</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.engine || 'brak'}</Text>
            </Flex>
        </Flex>
        <Flex flexFlow={'row'} gap={'1rem'}>
            <Flex flex={1} flexFlow={'column'}>
                <Text>0-100km/h</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.to_100 || 'brak'}</Text>
            </Flex>
            <Flex flex={1} flexFlow={'column'}>
                <Text>V-Max</Text>
                <Text color={'rgb(163, 130, 58)'}>{car.vmax || 'brak'}</Text>
            </Flex>
        </Flex>
        <Flex flexFlow={'column'}>
            <Text>Opis</Text>
            <Text color={'rgb(163, 130, 58)'}>{car.description || 'brak'}</Text>
        </Flex>
    </Flex>
}

export default CarSummaryDetails;