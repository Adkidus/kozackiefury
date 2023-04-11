import { Card, CardBody, Text, SimpleGrid, Flex, Button, useDisclosure } from "@chakra-ui/react";
import CarService from "./CarService";
import CarServiceAdd from "./CarServiceAdd";

const CarServices = ({car: {services, _id}, update}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const setService = newData => {
        update({services: newData})
    }
    return <Card>
        <CardBody bg={'rgb(33, 33, 33)'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'4xl'} mb={5} color={'rgb(163, 130, 58)'}>Oferta</Text>
                <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={onOpen}>Dodaj pozycje</Button>
            </Flex>
            <SimpleGrid columns={{base: 1, md: 1, lg: 2, xl: 3, '2xl': 4}} gap={'1.5rem'} color={'#fff'}>
                {services.length === 0 ? <Text>Brak danych</Text> : ''}
                {services.map(service => <CarService key={service._id} carID={_id} service={service} setService={setService} />)}
            </SimpleGrid>
        </CardBody>
        <CarServiceAdd isOpen={isOpen} onClose={onClose} carID={_id} setService={setService} />
    </Card>
}

export default CarServices;