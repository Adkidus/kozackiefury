import { axiosInstance } from '@/api-client/axiosInstance';
import CarCard from '@/components/Car/CarCard';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const CarsPage = () => {
  const [cars, setCars] = useState([])
  useEffect(()=>{
    getList()
  },[])
  const getList = async() => {
    try {
      const res = await axiosInstance.get('cars/getList')
      setCars(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <NextSeo
        title="KOZACKIE FURY | SAMOCHODY"
      />
      <main>
        <Container maxW={'7xl'}>
          <SimpleGrid my={10} columns={{base: 1, md: 2, '2xl': 3,}} gap={'1.75rem'}>
            {cars.map(car => <CarCard key={car._id} car={car} />)}
          </SimpleGrid>
        </Container>
      </main>
    </>
  )
}

CarsPage.layout = "default";

export default CarsPage;
