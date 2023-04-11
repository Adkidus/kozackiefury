import { Badge, Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CarCard = ({car}) => {
    return <Link to={`/car/${car._id}`}>
        <Card p={0} rounded={0} bg={'transparent'}>
            <CardBody>
                <Box h={'350px'} position={'relative'}>
                    <Badge bg={'rgba(163, 130, 58, .7)'} position={'absolute'} left={0} top={0} zIndex={999} color={'#fff'}>{car.category}</Badge>
                    <Image src={car.main_photo} alt={car._id} objectFit={'cover'} position={'absolute'} w={'100%'} h={'100%'} inset={0} color={'transparent'} />
                </Box>
                <Flex flexFlow={'row'} justifyContent={"space-between"} mb={4}>
                    <Flex flexFlow={'column'} justifyContent={'start'}>
                        <Text color={'#fff'} fontSize={'16px'} fontWeight={700} letterSpacing={'2px'} textTransform={'uppercase'}>{car.brand}</Text>
                        <Text color={'rgb(163, 130, 58)'} fontSize={'20px'} fontWeight={900} textAlign={'start'}>{car.model}</Text>
                    </Flex>
                    <Flex flexFlow={'column'} justifyContent={'start'}>
                        <Text color={'#fff'} fontSize={'16px'} fontWeight={700} letterSpacing={'2px'} textTransform={'uppercase'}>Rezerwacje</Text>
                        <Text color={'rgb(163, 130, 58)'} fontSize={'20px'} fontWeight={900} textAlign={'end'}>{car.reservations.length | 0}</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    </Link>
};

export default CarCard;