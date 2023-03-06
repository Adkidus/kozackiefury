import { Flex, Heading, Text, Box, Icon, Card, CardBody, Container } from "@chakra-ui/react";
import Image from "next/image";

import headerImg from '../assets/header.png';
import headerFull from '../assets/headerFull.jpeg';

export default function Header() {

    return <>

            <Flex flexFlow={{base: 'column', lg: 'row'}} minH={'35vh'} p={10} display={'none'}>
                <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
                    <Box>
                        <Heading color={'#e5bc42'}>KOZACKIEFURY</Heading>
                        <Text mt={'1.5rem'} maxW={'35rem'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio elit, at ornare libero rutrum ut. Aliquam sodales vestibulum neque, in lobortis ipsum ultricies eget</Text>
                    </Box>
                </Flex>
                <Flex flex={1} justifyContent={'center'} alignItems={'center'} position={'relative'} w={'full'} mt={{base: '5rem', lg: 0}} p={10}>
                    <Blob
                        width={'100%'}
                        height={'100%'}
                        left={0}
                        zIndex={-1}
                        color={'rgb(229, 188, 66)'}
                    />
                    <Card position={'absolute'}  w={'100%'} h={'70%'}>
                        <CardBody p={0}>
                            <Image src={headerImg.src} alt='header logo' objectFit="cover"  layout='fill' />
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>

        <Box height={'10rem'} width={'100vw'} display={'none'}></Box>
        <Flex flexFlow={{base: 'column', lg: 'row'}} minH={'55vh'} display={'none'}>
            <Flex flex={1} justifyContent={'center'} alignItems={'center'} p={10}>
                <Box>
                    <Heading color={'#e5bc42'}>KOZACKIEFURY</Heading>
                    <Text mt={'1.5rem'} maxW={'35rem'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio elit, at ornare libero rutrum ut. Aliquam sodales vestibulum neque, in lobortis ipsum ultricies eget</Text>
                </Box>
            </Flex>
            <Flex flex={1} justifyContent={'center'} alignItems={'center'} position={'relative'} w={'full'} mt={{base: '5rem', lg: 0}}>
                {/* <Blob
                    width={'100%'}
                    height={'100%'}
                    left={0}
                    zIndex={-1}
                    color={'rgb(229, 188, 66)'}
                /> */}
                {/* <Card position={'absolute'}  w={'100%'} h={'70%'}>
                    <CardBody p={0}> */}
                        <Image src={headerImg.src} alt='header logo' objectFit="cover"  layout='fill' />
                    {/* </CardBody>
                </Card> */}
            </Flex>
        </Flex>
        <Box height={'60vh'} width={'100vw'} position="relative" maxW={'100vw'} overflow={'hidden'}>
            <Image src={headerFull.src} alt='header logo' objectFit="cover" layout='fill' className="zoom full"/>
        </Box>
    </>
}

export const Blob = (props) => {
    return (
        <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};