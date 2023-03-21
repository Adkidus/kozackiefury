"use client";

import CarCard from "../../components/Car/CarCard";
import { Container, SimpleGrid } from "@chakra-ui/react";

export default function CarsComponent({cars}) {
    console.log(cars)
    return <>
        <main>
            <Container maxW={'7xl'}>
                <SimpleGrid my={10} columns={{base: 1, md: 2, '2xl': 3,}} gap={'1.75rem'}>
                    {cars.map(car => <CarCard key={car._id} car={car} />)}
                </SimpleGrid>
            </Container>
        </main>
    </>
}