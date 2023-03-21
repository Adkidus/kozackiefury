import { Box, Container, FormLabel, Flex, Heading, Text, Input, FormControl, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { axiosInstance } from "../../api-client/axiosInstance";

const schema = yup.object({
    person: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    notes: yup.string().required(),
    date: yup.date().required(),
    location: yup.string().required(),
}).required();

export default function RentForm({carID}){
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async(data) => {
        try {
            const dataToSave = {...data}
            dataToSave.carID = carID;
            const res = await axiosInstance.post('orders/new', dataToSave)
        } catch (error) {
            
        }
    }
    return <Container maxW={'2xl'} justifyContent={'center'} alignItems={"center"} my={12}>
        <Flex flexFlow={'column'} >
            <Heading textTransform={'uppercase'} textAlign={'center'}>Przejedźmy się !</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexFlow={'column'} gap={'1rem'} mt={8}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Imię i nazwisko</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} {...register('person')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Email</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} {...register('email')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Telefon</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} {...register('phone')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Lokalizacja</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} {...register('location')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Data</FormLabel>
                        <Input borderColor={'rgb(163, 130, 58)'} type="date" {...register('date')} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Treść</FormLabel>
                        <Textarea borderColor={'rgb(163, 130, 58)'} {...register('notes')} />
                    </FormControl>
                    <Button 
                        type="submit"
                        mt={4}
                        bg={'rgb(163, 130, 58)'}
                        color={'#fff'}
                        w={'full'} 
                        textTransform={'uppercase'}
                        rounded={0}
                        _hover={{
                            bg: 'rgb(163, 130, 58)',
                            color: '#fff'
                        }}>Wyślij</Button>
                </Flex>
            </form>
        </Flex>
    </Container>
}