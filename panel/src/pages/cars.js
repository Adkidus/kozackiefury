
import { Container, Flex, SimpleGrid, Text, Button, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import Loader from "../components/Loader";
import { getCars } from "../store/cars/actions";
import { Link } from "react-router-dom";

const Cars = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    useEffect(()=>{
        dispatch(getCars())
    },[dispatch])

    if(cars.loading) return <Loader />;

    return <Container maxW={'8xl'}>
        <Flex w="full" justifyContent={'space-between'} alignItems={'center'} px={5}>
            <Text color={'#fff'} fontSize={'5xl'}>Flota</Text>
            <Link to={'/car/new'}>
                <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}}>Dodaj auto</Button>
            </Link>
        </Flex>
        <Divider borderColor={'rgb(163, 130, 58)'} />
        <SimpleGrid columns={{base: 1, lg: 2, '2xl': 3}} gap={'1rem'}>
            {cars.carsList.map(car => <CarCard key={car._id} car={car} />)}
        </SimpleGrid>
    </Container>
}

export default Cars;