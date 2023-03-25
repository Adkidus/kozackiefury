"use client"

import { Box, Button, Card, CardBody, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from "next/link";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
}

const CarCard = ({car, hideBrand}) => {
  const router = useRouter()
  const goToCar = () => {
    router.push(`/car/${car.pathName}`)
  }
  return <>
    <Link href={`/car/${car.pathName}`}>
    <Card p={0} rounded={0} bg={'transparent'}>
        <CardBody p={0} cursor={'pointer'}>
            <Box h={'320px'}>
                <Box style={{width: '100%', height: '100%', position: 'relative'}}>
                    <Image
                        src={car.main_photo}
                        alt={`${car.brand} ${car.model}`}
                        loading={'lazy'}
                        layout='fill'
                        objectFit='contain'
                    />
                    {/* <Box 
                        className="cp-price"
                        position={'absolute'}
                        left={0}
                        top={0}
                        bgGradient='linear(to-r, rgb(163, 130, 58), transparent)'
                        color={'#fff'}
                        p={1}
                        pr={10}
                        fontSize={'sm'}
                    >
                        <Text>Cena od:</Text>
                        <Text fontWeight={'bold'}>1000zl</Text>
                    </Box> */}
                </Box>
            </Box>
            <Box color={'#fff'} p={4} display={hideBrand ? 'none' : 'block'}>
                <Flex flexFlow={'column'} justify={'center'} alignItems={'center'} mb={4}>
                    <Text color={'white.500'} fontSize={'16px'} fontWeight={700} letterSpacing={'2px'} textTransform={'uppercase'}>{car.brand}</Text>
                    <Heading color={'rgb(163, 130, 58)'} fontSize={'20px'} pt={1} fontWeight={900} textAlign={'center'}>{car.model}</Heading>
                </Flex>
                {/* <Button 
                  onClick={goToCar}
                    borderColor={'rgb(163, 130, 58)'}
                    color={'rgb(163, 130, 58)'}
                    w={'full'} 
                    variant='outline' 
                    textTransform={'uppercase'}
                    rounded={0}
                    _hover={{
                        bg: 'rgb(163, 130, 58)',
                        color: '#fff'
                    }}>Przejedźmy się</Button> */}
            </Box>
        </CardBody>
    </Card>
    </Link>
    </>;
}

export default CarCard;