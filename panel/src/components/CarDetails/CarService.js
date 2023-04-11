import { Text, Flex, FormControl, FormLabel, Input, Button, useToast, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { RiEditFill, RiCloseLine } from 'react-icons/ri'
import {FaTrash} from 'react-icons/fa'
import api from "../../utils/api";

const schema = yup.object({
    title: yup.string().required('Pole nie moe być puste!'),
    price: yup.string().required('Pole nie moe być puste!'),
    time: yup.string().required('Pole nie moe być puste!'),
    description: yup.string().required('Pole nie moe być puste!'),
}).required();

const CarService = ({carID, service: {title, price, time, description, _id}, setService}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const toast = useToast();
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const [editMode, setEditMode] = useState(false)
    useEffect(() => {
        reset({title, price, time, description})
    }, [editMode])
    const setMode = () => {
        setEditMode(!editMode)
    }
    const submitForm = async(data) => {
        try {
            const res = await api.post(`/cars/updateService/${carID}/${_id}`, data)
            setService(res.data.services)
            toast({
                title: `Zapisano!`,
                status: 'success',
                isClosable: true,
            })
            setEditMode(!editMode)
        } catch (error) {
            toast({
                title: `Nie udało sie zapisać zmian!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    const remove = async() => {
        try {
            const res = await api.delete(`/cars/deleteService/${carID}/${_id}`)
            toast({
                title: `Usunięto!`,
                status: 'success',
                isClosable: true,
            })
            setService(res.data.services)
            setEditMode(!editMode)
        } catch (error) {
            toast({
                title: `Nie udało sie usunąć!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    return <form onSubmit={handleSubmit(submitForm)}>
        <Flex flexFlow={'column'} gap={'1rem'} p={4} border={'1px solid rgb(163, 130, 58)'} position={'relative'}>
            <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} right={0} top={0} p={2} px={3} zIndex={999} cursor={'pointer'} onClick={onOpen}>
                 <FaTrash style={{cursor: 'pointer'}} />
            </Flex>
            <Flex position={'absolute'} bg={'rgb(163, 130, 58)'} color={'#fff'} left={0} top={0} p={2} px={3} zIndex={999} cursor={'pointer'} onClick={setMode}>
                {editMode ? <RiCloseLine style={{cursor: 'pointer'}} /> : <RiEditFill style={{cursor: 'pointer'}} />}
            </Flex>
            <FormControl mt={7}>
                <FormLabel color={'rgb(163, 130, 58)'}>Nazwa</FormLabel>
                {editMode ? <Input {...register('title')} /> : <Text py={2}>{title || 'brak'}</Text>}
            </FormControl>
            <FormControl>
                <FormLabel color={'rgb(163, 130, 58)'}>Cena</FormLabel>
                {editMode ? <Input {...register('price')} /> : <Text py={2}>{price || 'brak'}</Text>}
            </FormControl>
            <FormControl>
                <FormLabel color={'rgb(163, 130, 58)'}>Czas</FormLabel>
                {editMode ? <Input {...register('time')} /> : <Text py={2}>{time || 'brak'}</Text>}
            </FormControl>
            <FormControl>
                <FormLabel color={'rgb(163, 130, 58)'}>Opis</FormLabel>
                {editMode ? <Input {...register('description')} /> : <Text py={2}>{description || 'brak'}</Text>}
            </FormControl>
            {editMode ? <Button type="submit" bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}}>ZAPISZ</Button> : ''}
        </Flex>
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
            <AlertDialogContent bg={'rgb(33, 33, 33)'}>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>Usuwanie</AlertDialogHeader>
                <AlertDialogBody>
                    Czy napewno chcesz usunąc ? 
                </AlertDialogBody>
                <AlertDialogFooter>
                <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} ref={cancelRef} onClick={onClose}>
                    Nie
                </Button>
                <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={remove} ml={3}>
                    Tak
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </form>
}

export default CarService;