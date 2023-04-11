import { Box, Button, Card, CardBody, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import CarForm from "../components/CarNew/CarForm";
import CarGallery from "../components/CarNew/CarGallery";
import CarOwner from "../components/CarNew/CarOwner";
import CarServices from "../components/CarNew/CarServices";
import CarSummary from "../components/CarNew/CarSummary";
import { CarContext } from "../providers/CarContext";
import { Link } from "react-router-dom";

const stepTitles = ['Dane samochodu', 'Właściciel samochodu', 'Galeria', 'Oferta', 'Podsumowanie'];

const renderSwitch = (step, stepActions) => {
    switch(step) {
        case 0:
            return <CarForm nextStep={stepActions} />;
        case 1: 
            return <CarOwner stepActions={stepActions} />;
        case 2: 
            return <CarGallery stepActions={stepActions} />
        case 3: 
            return <CarServices stepActions={stepActions} />
        case 4: 
            return <CarSummary stepActions={stepActions} />
        default:
            return <div>{step + 1}</div>;
    }
}

const CarNew = () => {
    const [carData, setCarData] = useState();
    const value = { carData, setCarData };    
    const [step, setStep] = useState(0);
    const stepActions = (next=true) => {
        if(next){
            if(step+1 < stepTitles.length)
                setStep(step+1)
        }
        else{
            if(step-1>=0)
                setStep(step-1)
        }
    }
    return <>
        <Flex flexFlow={'column'} gap={'1rem'}>
            <Card>
                <CardBody bg={'rgb(33, 33, 33)'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'} color={'rgb(163, 130, 58)'}>
                        <Text fontSize={'2xl'}>Dodaj samochód</Text>
                        <Link to='/cars'>
                            <Button variant={'outline'} bg={'transparent'} borderColor={'rgb(163, 130, 58)'} _hover={{bg:'transparent'}}>Wyjdź</Button>
                        </Link>
                    </Flex>
                </CardBody>
            </Card>
            <Card>
                <CardBody bg={'rgb(33, 33, 33)'}>
                    <Flex alignItems={'center'} gap={'1rem'} color={'#fff'}>
                        <Box rounded={'50px'} w={'80px'} h={'80px'} border={'1px solid rgb(163, 130, 58)'} fontSize={'2xl'}><Center h={'full'} letterSpacing={'1px'}>{step + 1} / {stepTitles.length}</Center></Box>
                        <Text fontSize={'2xl'}>{stepTitles[step]}</Text>
                    </Flex>
                    <Box mt={8}>
                        <CarContext.Provider value={value}>
                            {renderSwitch(step, stepActions)}
                        </CarContext.Provider>
                    </Box>
                </CardBody>
            </Card>
        </Flex>
    </>
}

export default CarNew;