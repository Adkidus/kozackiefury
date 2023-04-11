import { Button, Flex, SimpleGrid} from "@chakra-ui/react"
import ServiceForm from "../ServiceForm"
import ServiceAdd from "../ServiceAdd"
import { CarContext } from '../../providers/CarContext';
import { useState, useEffect, useContext } from "react";

const CarServices = ({stepActions}) => {
    const { carData, setCarData } = useContext(CarContext);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        if(carData?.services)
            setServices(carData.services)
        else{
            setCarData({
                ...carData,
                ...{services: []}
            })
        }
    },[carData, setCarData])
    const change = (e,i) => {
        let arr = [...services]
        let service = {...arr[i]}
        service[e.target.name] = e.target.value;
        arr[i] = service;
        setServices(arr)
    }
    const addService = newServices => {
        let arr = [...services, ...newServices]
        setServices(arr)
    }
    const deleteService = i => {
        let arr = [...services]
        arr.splice(i, 1);
        setServices(arr)
    }
    const saveData = () => {
        setCarData({
            ...carData,
            ...{services: services}
        })
    }
    const submitForm = () => {
        saveData();
        stepActions();
    }
    const back = () => {
        saveData();
        stepActions(false);
    }
    return <>
        <Flex flexFlow={'column'}>
            <SimpleGrid columns={{base: 1, md: services.length > 0 ? 2 : 1}} gap={'1rem'} mb={12}>
                {services.map((service, index) => <ServiceForm key={index} i={index} service={service} deleteService={deleteService} change={change} />)}
                <ServiceAdd addService={addService} />
            </SimpleGrid>
            <Button my={4} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={submitForm}>Dalej</Button>
            <Button variant={'outline'} my={4} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={back}>Cofnij</Button>
        </Flex>
    </>
}

export default CarServices;