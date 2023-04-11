import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import { CarContext } from '../../providers/CarContext';
import { MdAddAPhoto } from 'react-icons/md'
import CarGalleryItem from "./CarGalleryImage";

const CarGallery = ({stepActions}) => {
    const { carData, setCarData } = useContext(CarContext);
    const [images, setImages] = useState([])
    useEffect(()=>{
        if(carData?.images){
            setImages(carData.images)
        }else{
            setCarData({
                ...carData,
                ...{images: []}
            })
        }
    },[carData, setCarData])
    const handleImage = e => {
        const arr = [...images]
        if(e.target.files[0]) {
            arr.push({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name,
                file: e.target.files[0],
                isMain: images.length === 0
            })
        }
        setImages(arr)
    }
    const setMain = index => {
        const arr = [...images]
        const i = arr.findIndex(e => e.isMain)
        arr[i].isMain = false;
        arr[index].isMain = true;
        setImages(arr)
    }
    const deleteImage = index => {
        const arr = [...images]
        arr.splice(index, 1);
        if(arr.length > 0)
            arr[0].isMain = true;
        setImages(arr)
    }
    const saveImages = () => {
        setCarData({
            ...carData,
            ...{images: images}
        })
    }
    const submitForm = () => {
        saveImages()
        stepActions()
    }
    const back = () => {
        saveImages()
        stepActions(false)
    }
    return  <Flex flexFlow={'column'}  color={'rgb(163, 130, 58)'} mt={12}>
        <SimpleGrid columns={{base: 1, md: 1, lg: 2, xl: 3, '2xl': 4}} gap={'1.5rem'} mb={10}>
            {images.map((image,index) => <CarGalleryItem key={index} pos={index} image={image} setMain={setMain} deleteImage={deleteImage} /> )}
            <Flex flexFlow={'column'} fontSize={'7xl'} p={8} cursor={'pointer'} justifyContent={'center'} alignItems={'center'} gap={'1rem'} _hover={{bg: 'rgba(0,0,0,.1)'}} position={'relative'}>
                <MdAddAPhoto cursor={'pointer'} />
                <Text fontSize={'2xl'} letterSpacing={'3px'} textTransform={'uppercase'} cursor={'pointer'}>Dodaj zdjęcie</Text>
                <input type="file" className="image-upload" accept="image/*" style={{opacity: 0, position: 'absolute', overflow: 'hidden', cursor: 'pointer', width: '100%', height: '100%'}} onChange={handleImage} />
            </Flex>
        </SimpleGrid>
        <Button my={4} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={submitForm}>Dalej</Button>
        <Button variant={'outline'} my={4} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={back}>Cofnij</Button>
    </Flex>
}

export default CarGallery;