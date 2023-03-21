"use client";

import Carousel from "../../../components/Carousel";
import { Box, Container, SimpleGrid, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import RentForm from "../../../components/Forms/Rent";
import CountUp from 'react-countup';

const parseNumber = n => {
    if(!n) return 0;
    return n.replace(",", ".");
}

export default function CarComponent({car}) {
    const to100 = parseNumber(car.to_100);
    return <>
        <Container maxW={'8xl'} my={20}>
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
                <Carousel images={car.photos} />
                <Box flex={1}>
                    <Heading>
                        {car.brand} 
                        <Text color={'rgb(163, 130, 58)'}>{car.model}</Text>
                    </Heading>
                    <Divider my={4} borderColor={'rgb(163, 130, 58)'} />
                    <Text mt={4}>{car.description}</Text>
                </Box>
            </Flex> 
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'} justifyContent={'center'} alignItems={"center"} my={12} py={8} borderTop={'1px solid'} borderBottom={"1px solid"} borderColor={'rgb(163, 130, 58)'}>
                <Flex flex={1} flexFlow={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontSize={'2xl'}>SILNIK</Text>
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}>
                        {car.engine}
                    </Text>
                </Flex>
                <Flex flex={1} flexFlow={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontSize={'2xl'}>MOC</Text>
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}>
                        <CountUp end={Number(car.horse_power)} duration={5}/> KM</Text>
                </Flex>
                <Flex flex={1} flexFlow={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontSize={'2xl'}>0-100kmh/h</Text>
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}> 
                        <CountUp end={Number(to100)}  decimals={1}  decimal="," duration={5}/>s
                    </Text>
                </Flex>
            </Flex>
            <RentForm carID={car._id} />
        </Container>
    </>
}