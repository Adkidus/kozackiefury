import { Button, Card, CardBody, Flex, FormControl, FormLabel, Input, Text, Textarea, Select, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from "../../utils/api";

const schema = yup.object({
    brand: yup.string().required('Pole nie moe być puste!'),
    model: yup.string().required('Pole nie moe być puste!'),
    horse_power: yup.string().required('Pole nie moe być puste!'),
    engine: yup.string().required('Pole nie moe być puste!'),
    to_100: yup.string().required('Pole nie moe być puste!'),
    vmax: yup.number().required('Pole nie moe być puste!'),
    description: yup.string().required('Pole nie moe być puste!'),
    category: yup.string().required('Pole nie moe być puste!'),
}).required();

const CarInfo = ({car: {brand, model, horse_power, engine, to_100, vmax, description, category, _id}, update}) => {
    const toast = useToast();
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>{
        reset({brand, model, horse_power, engine, to_100, vmax, description, category})
    },[editMode])
    const submitForm = async(data) => {
        try {
            await api.post(`/cars/updateDetails/${_id}`, data);
            update(data)
            toast({
                title: `Zapisano!`,
                status: 'success',
                isClosable: true,
            })
            setEditMode(false)
        } catch (error) {
            toast({
                title: `Nie udało sie zapisać zmian!`,
                status: 'error',
                isClosable: true,
            })
        }
    }
    return <Card>
        <CardBody bg={'rgb(33, 33, 33)'}>
         <Flex justifyContent={'space-between'} alignItems={'center'} mb={5}>
                <Text fontSize={'4xl'} color={'rgb(163, 130, 58)'}>Informacje</Text>
            </Flex>
            <form onSubmit={handleSubmit(submitForm)}>
                <Flex flexFlow={{base:'column', md: 'row'}} gap={'1rem'} color={'#fff'}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>ID</FormLabel>
                        <Text py={2}>{_id}</Text>
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Kategoria</FormLabel>
                        {editMode ? 
                            <Select {...register("category")} bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'}>
                                <option value=''></option>
                                <option value='Fast&Furious'>Fast&Furious</option>
                                <option value='Luxury&Business'>Luxury&Business</option>
                                <option value='Retro&Soul'>Retro&Soul</option>
                            </Select>
                            :<Text py={2}>{category}</Text>
                        }
                    </FormControl>
                </Flex>
                <Flex flexFlow={{base:'column', md: 'row'}} gap={'1rem'} color={'#fff'} my={6}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Marka</FormLabel>
                        {editMode ? <Input  {...register('brand')} /> : <Text py={2}>{brand}</Text>}
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Model</FormLabel>
                        {editMode ? <Input  {...register('model')} /> : <Text py={2}>{model}</Text>}
                    </FormControl>
                </Flex>
                <Flex flexFlow={{base:'column', md: 'row'}} gap={'1rem'} color={'#fff'} my={6}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Moc (KM)</FormLabel>
                        {editMode ? <Input  {...register('horse_power')} /> : <Text py={2}>{horse_power}</Text>}
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>Silnik</FormLabel>
                        {editMode ? <Input {...register('engine')} /> : <Text py={2}>{engine}</Text>}
                    </FormControl>
                </Flex>
                <Flex flexFlow={{base:'column', md: 'row'}} gap={'1rem'} color={'#fff'} my={6}>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>0-100km/h</FormLabel>
                        {editMode ? <Input {...register('to_100')} /> : <Text py={2}>{to_100}</Text>}
                    </FormControl>
                    <FormControl>
                        <FormLabel color={'rgb(163, 130, 58)'}>V-Max</FormLabel>
                        {editMode ? <Input {...register('vmax')} /> : <Text py={2}>{vmax}</Text>}
                    </FormControl>
                </Flex>
                <FormControl>
                    <FormLabel color={'rgb(163, 130, 58)'}>Opis</FormLabel>
                    {editMode ? <Textarea {...register('description')} bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} /> : <Text py={2} color={'#fff'}>{description}</Text>}
                </FormControl>
                {editMode ? <Flex mt={5} justifyContent={'space-between'}>
                    <Button variant={'outline'} bg={'transparent'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} _hover={{borderColor: 'rgb(163, 130, 58)'}} onClick={()=>setEditMode(false)}>Anuluj</Button>
                    <Button bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} type="submit">Zapisz</Button>
                </Flex> : <Button  mt={5} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}} onClick={()=>setEditMode(true)}>Edytuj</Button>}
            </form>
        </CardBody>
    </Card>
};

export default CarInfo;