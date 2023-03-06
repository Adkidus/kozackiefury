import { Box, Button, Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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

const CarCard = () => {
    return <FadeInWhenVisible>
    <Card p={0} rounded={0} bg={'#000'}>
        <CardBody p={0}>
            <Box h={'260px'}>
                <Box style={{width: '100%', height: '100%', position: 'relative'}}>
                    <Image
                        src={'https://api.kozackiefury.pl/./public/uploads/cars/83729038-AE2C-453B-8A21-39317C884928-1678053865972.webp'}
                        loading={'lazy'}
                        layout='fill'
                        objectFit='cover'
                    />
                    <Box 
                        className="cp-price"
                        position={'absolute'}
                        left={0}
                        top={0}
                        // bg={'rgb(163, 130, 58)'}
                        bgGradient='linear(to-r, rgb(163, 130, 58), transparent)'
                        color={'#fff'}
                        p={1}
                        pr={10}
                        fontSize={'sm'}
                    >
                        <Text>Cena od:</Text>
                        <Text fontWeight={'bold'}>1000zl</Text>
                    </Box>
                </Box>
            </Box>
            <Box color={'#fff'} p={4}>
                <Flex flexFlow={'column'} justify={'center'} alignItems={'center'} mb={4}>
                    <Text color={'white.500'} fontSize={'12px'} fontWeight={700} letterSpacing={'2px'} textTransform={'uppercase'}>MASERATI</Text>
                    <Heading color={'rgb(163, 130, 58)'} fontSize={'16px'} pt={1} fontWeight={900} textAlign={'center'}>GRAN TURISMO SPORT</Heading>
                </Flex>
                <Button 
                    borderColor={'rgb(163, 130, 58)'}
                    color={'rgb(163, 130, 58)'}
                    w={'full'} 
                    variant='outline' 
                    textTransform={'uppercase'}
                    rounded={0}
                    _hover={{
                        bg: 'rgb(163, 130, 58)',
                        color: '#fff'
                    }}>Przejedźmy się</Button>
            </Box>
        </CardBody>
    </Card>
    </FadeInWhenVisible>;
}

export default CarCard;