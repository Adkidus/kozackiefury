import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, FormControl, FormLabel, Textarea, Input, useToast } from "@chakra-ui/react";
import CarService from "./CarService";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from "../../utils/api";

const schema = yup.object({
    title: yup.string().required('Pole nie moe być puste!'),
    price: yup.string().required('Pole nie moe być puste!'),
    time: yup.string().required('Pole nie moe być puste!'),
    description: yup.string().required('Pole nie moe być puste!'),
}).required();

const CarServiceAdd = ({isOpen, onClose, carID, setService}) => {
    const toast = useToast();
    const {handleSubmit, register, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = async(data) => {
        try {
            const res = await api.post(`/cars/addService/${carID}`, data);
            setService(res.data.services)
            toast({
                title: `Dodano!`,
                status: 'success',
                isClosable: true,
            })
            onClose()
        } catch (error) {
            toast({
                title: `Nie udało sie dodać pozycji!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    return <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
    >
        <DrawerOverlay />
        <form onSubmit={handleSubmit(submitForm)}>
            <DrawerContent bg={'rgb(33, 33, 33)'}>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                    Dodaj do oferty
                </DrawerHeader>
                <DrawerBody>
                    <FormControl my={4}>
                        <FormLabel>Nazwa</FormLabel>
                        <Input {...register('title')}  />
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel>Czas</FormLabel>
                        <Input {...register('time')}  />
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel>Cena</FormLabel>
                        <Input {...register('price')}  />
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel>Opis</FormLabel>
                        <Textarea bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} {...register('description')}  />
                    </FormControl>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} mr={3} onClick={onClose}>Anuluj</Button>
                    <Button type="submit" bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}}>Zapisz</Button>
                </DrawerFooter>
            </DrawerContent>
        </form>
    </Drawer>
}

export default CarServiceAdd;