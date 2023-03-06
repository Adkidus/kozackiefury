import About from '@/components/About';
import CarCard from '@/components/Car/CarCard';
import ContactForm from '@/components/Forms/Contact';
import Header from '@/components/Header';
import { Box, Container, SimpleGrid, Flex, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const IndexPage = () => {
  return (
    <>
      <NextSeo
        title="KOZACKIE FURY"
      />
      <Header />
      <Box width='100vw' height='5rem' background={{base: '#111111', md: '#161616'}} borderTop={'1px solid rgb(163, 130, 58)'}></Box>
      <About />
      <Container maxW={'8xl'} mb={10}>
        <Flex gap={'1rem'} mb={6} justifyContent={'center'} alignItems={'center'}>
          <Box cursor={'pointer'} fontWeight={700} p={2} borderBottom={'1px solid rgb(163, 130, 58)'} color={'rgb(163, 130, 58)'}>
            <Text>Fast&Furious</Text>
          </Box>
          <Box cursor={'pointer'} fontWeight={500} p={2} borderBottom={'1px solid transparent'} color={'rgb(163, 130, 58)'}>
            <Text>Luxury&Business</Text>
          </Box>
          <Box cursor={'pointer'} fontWeight={500} p={2} borderBottom={'1px solid transparent'} color={'rgb(163, 130, 58)'}>
            <Text>Retro&Soul</Text>
          </Box>
        </Flex>
        <SimpleGrid columns={{md: 1, lg: 3, xl: 4}} gap={'1rem'}>
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </SimpleGrid>
      </Container>
      <ContactForm />
    </>
  )
}

IndexPage.layout = "default";

export default IndexPage;