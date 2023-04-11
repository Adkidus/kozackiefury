import { Card, CardBody, SimpleGrid, Text, Flex, Button, useToast } from "@chakra-ui/react";
import CarGalleryImage from "./CarGalleryImage";
import api from "../../utils/api";

const CarGallery = ({car: {photos, main_photo, _id}, update}) => {
    const toast = useToast();
    const setMain = src => {
        console.log('main is ', src)
    }
    const deleteImage = async(imageId) => {
        try {
            const res = await api.delete(`/cars/deleteImage/${_id}/${imageId}`)
            update(res.data)
            toast({
                title: `Zdjęcie zostało usunięte!`,
                status: 'success',
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: `Nie udało sie usunąć zdjęcia!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    const add = () => {
        document.getElementById(`uploadImage-${_id}`).click()
    }
    const handleImage = async(e) => {
        try {
            let formData = new FormData();
            formData.append("image", e.target.files[0]);
            const res = await api.post(`/cars/addImage/${_id}`, formData)
            update(res.data)
            toast({
                title: `Zdjęcie zostało dodane!`,
                status: 'success',
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: `Nie udało sie dodać zdjęcia!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    return <Card>
        <CardBody bg={'rgb(33, 33, 33)'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'4xl'} mb={5} color={'rgb(163, 130, 58)'}>Galeria</Text>
                <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={add}>Dodaj</Button>
                <input id={`uploadImage-${_id}`} type="file" className="image-upload" accept="image/*" style={{display: 'none'}} onChange={handleImage} />
            </Flex>
            <SimpleGrid columns={{base: 1, md: 1, lg: 2, xl: 3, '2xl': 4}} gap={'1.5rem'}>
                {photos.map((image) => 
                    <CarGalleryImage 
                        key={image._id} 
                        src={image.location}
                        alt={image._id} 
                        canDelete={photos.length >= 2}
                        isMain={main_photo === image.location}
                        setMain={setMain}
                        deleteImage={deleteImage} /> )}
            </SimpleGrid>
        </CardBody>
    </Card>
}

export default CarGallery;