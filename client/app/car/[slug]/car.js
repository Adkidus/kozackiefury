"use client";

import Carousel from "../../../components/Carousel";
import { Box, Container, SimpleGrid, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import RentForm from "../../../components/Forms/Rent";

export default function CarComponent({car}) {
    useEffect(()=>{
        console.log(car)
    },[car])
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
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}>{car.engine}</Text>
                </Flex>
                <Flex flex={1} flexFlow={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontSize={'2xl'}>MOC</Text>
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}>{car.horse_power} KM</Text>
                </Flex>
                <Flex flex={1} flexFlow={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontSize={'2xl'}>0-100kmh/h</Text>
                    <Text color={'rgb(163, 130, 58)'} fontWeight={'bold'} fontSize={'5xl'}>{car.to_100}s</Text>
                </Flex>
            </Flex>
            <RentForm />
        </Container>
    </>
}