'use client'

import About from "../components/About"
import { Box, Container, Flex } from "@chakra-ui/react"
import Gallery from "../components/Gallery"
import { useRef, useState } from "react";
import {BiVolumeMute} from 'react-icons/bi'

export default function Page() {
  const [isMuted, setIsMuted] = useState(true)
  const refVideo = useRef(null);
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }
  return <>
  <Box position={'relative'} display={'grid'} height={{base: '40vh', md: '70vh'}} width={'100vw'} margin={'0 auto'} bg={'#000'} placeItems={'center'}>
    <video ref={refVideo} className="fullscreen" autoPlay muted={isMuted} playsInline loop style={{zIndex: 1}} onClick={toggleMute}>
      <source src="/kozackiefury.mp4" type="video/mp4" />
      <source src="/kozackiefury.webm" type="video/webm" />
    </video>
    <Flex zIndex={1000} fontSize={'8xl'} cursor={'pointer'} onClick={toggleMute} display={isMuted ? 'flex' : 'none'}>
      <BiVolumeMute />
    </Flex>
  </Box>
  <About />
  <Container maxW={'8xl'}>
    <Flex>
      <Gallery />
    </Flex>
  </Container>
  </>
}