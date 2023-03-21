'use client'

import About from "../components/About"
import { Box, Container, Flex } from "@chakra-ui/react"
import Gallery from "../components/Gallery"
// import movie from '../assets/Kozackiefury.mov';

export default function Page() {
  return <>
  <Box position={'relative'} display={'grid'} height={{base: '40vh', md: '70vh'}} width={'100vw'} margin={'0 auto'} bg={'#000'} placeItems={'center'}>
    <video className="fullscreen" autoPlay muted playsinline>
      <source src="/kozackiefury.mp4" type="video/mp4" />
      <source src="/kozackiefury.webm" type="video/webm" />
    </video>
  </Box>
  <About />
  <Container maxW={'8xl'}>
    <Flex>
      <Gallery />
    </Flex>
  </Container>
  </>
}