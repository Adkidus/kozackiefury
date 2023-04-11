import {Flex, Image, SimpleGrid} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { CarContext } from '../../providers/CarContext';

const CarSummaryGallery = () => {
    const {carData, setCarData} = useContext(CarContext);
    const [images, setImages] = useState([])
    useEffect(()=>{
        if(carData?.images)
            setImages(carData.images)
    },[carData, setCarData]) // eslint-disable-line react-hooks/exhaustive-deps
    return <Flex>
        <SimpleGrid columns={{base: 1, lg: 2, '2xl': 3}} gap={'1.25rem'}>
            {images.map((img, index) => <Image key={index} src={img.src} alt={img.alt} height={'250px'} w={'full'} objectFit={'cover'} />)}
        </SimpleGrid>
    </Flex>
}

export default CarSummaryGallery;