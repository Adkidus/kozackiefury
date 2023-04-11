import {Flex, Text} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { CarContext } from '../../providers/CarContext';
import { PersonModel } from '../../models/Person'

const CarSummaryOwner = () => {
    const {carData, setCarData} = useContext(CarContext);
    const [person, setPerson] = useState(PersonModel);
    useEffect(()=>{
        if(carData?.owner)
            setPerson(carData.owner)
    },[carData, setCarData]) // eslint-disable-line react-hooks/exhaustive-deps

    return <Flex flexFlow={'column'} gap={'1rem'}>
        <Flex flexFlow={'column'}>
            <Text>Imię i nazwisko</Text>
            <Text color={'rgb(163, 130, 58)'}>
                {person.first_name === '' && person.last_name === '' ? 'brak' : `${person.first_name} ${person.last_name}`}
            </Text>
        </Flex>
        <Flex flexFlow={'column'}>
            <Text>Telefon</Text>
            <Text color={'rgb(163, 130, 58)'}>{person.phone || 'brak'}</Text>
        </Flex>
        <Flex flexFlow={'column'}>
            <Text>Email</Text>
            <Text color={'rgb(163, 130, 58)'}>{person.email || 'brak'}</Text>
        </Flex>
    </Flex>
}

export default CarSummaryOwner;