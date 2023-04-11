import {Divider, Flex, Text} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { CarContext } from '../../providers/CarContext';

const Service = ({service}) => {
    console.log(service)
    return <Flex flexFlow={'column'} gap={'1rem'}>
        <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
            <Flex flex={1} flexFlow={'column'}>
                <Text>nazwa</Text>
                <Text color={'rgb(163, 130, 58)'}>{service.title}</Text>
            </Flex>
            <Flex flex={1} flexFlow={'column'}>
                <Text>czas</Text>
                <Text color={'rgb(163, 130, 58)'}>{service.time}</Text>
            </Flex>
            <Flex flex={1} flexFlow={'column'}>
                <Text>cena</Text>
                <Text color={'rgb(163, 130, 58)'}>{service.title}</Text>
            </Flex>
        </Flex>
        <Flex flexFlow={'column'}>
            <Text>opis</Text>
            <Text color={'rgb(163, 130, 58)'}>{service.title}</Text>
        </Flex>
        <Divider />
    </Flex>
}

const CarSummaryServices = () => {
    const {carData, setCarData} = useContext(CarContext);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        if(carData?.services)
            setServices(carData.services)
    },[carData, setCarData])
    return <Flex flexFlow={'column'} gap={'1.5rem'}>
        {services.map((service,i) => <Service key={i} service={service} />)}
    </Flex>
}

export default CarSummaryServices;