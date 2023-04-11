import {useContext, useEffect} from 'react'
import { CarContext } from '../../providers/CarContext';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CarModel } from '../../models/Car'
import { Button, Flex, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Select } from '@chakra-ui/react';

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

const CarForm = ({nextStep}) => {
    const {carData, setCarData} = useContext(CarContext);
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const resetData = () => {
        reset(carData.details)
    }
    const submitForm = data => {
        setCarData({
            ...carData,
            ...{details: data}
        })
        nextStep()
    };
    useEffect(()=>{
        if(carData?.details){
            resetData()
        }else{
            setCarData({
                ...carData,
                ...{details: CarModel}
            })
        }
    },[carData, setCarData])// eslint-disable-line react-hooks/exhaustive-deps
    return <form onSubmit={handleSubmit(submitForm)}>
        <Flex flexFlow={'column'} gap={'1.25rem'} color={'rgb(163, 130, 58)'}>
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
                <FormControl flex={'1'}>
                    <FormLabel>Status</FormLabel>
                    <Select {...register("status")} bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'}>
                        <option value='active' selected>Aktywny</option>
                        <option value='paused'>Ukryty</option>
                    </Select>
                </FormControl>
                <FormControl flex={'1'} isInvalid={errors.category}>
                    <FormLabel>Kategoria</FormLabel>
                    <Select {...register("category")} bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'}>
                        <option value=''></option>
                        <option value='Fast&Furious'>Fast&Furious</option>
                        <option value='Luxury&Business'>Luxury&Business</option>
                        <option value='Retro&Soul'>Retro&Soul</option>
                    </Select>
                    <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
                <FormControl flex={'1'} isInvalid={errors.brand}>
                    <FormLabel>Marka</FormLabel>
                    <Input {...register("brand")} />
                    <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
                </FormControl>
                <FormControl flex={'1'} isInvalid={errors.model}>
                    <FormLabel>Model</FormLabel>
                    <Input {...register("model")} />
                    <FormErrorMessage>{errors.model?.message}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
                <FormControl flex={'1'} isInvalid={errors.horse_power}>
                    <FormLabel>Moc (KM)</FormLabel>
                    <Input {...register("horse_power")} />
                    <FormErrorMessage>{errors.horse_power?.message}</FormErrorMessage>
                </FormControl>
                <FormControl flex={'1'} isInvalid={errors.engine}>
                    <FormLabel>Silnik</FormLabel>
                    <Input {...register("engine")} />
                    <FormErrorMessage>{errors.engine?.message}</FormErrorMessage>
                </FormControl>
            </Flex>
            <Flex flexFlow={{base: 'column', md: 'row'}} gap={'1rem'}>
                <FormControl flex={'1'} isInvalid={errors.to_100}>
                    <FormLabel>0-100km/h</FormLabel>
                    <Input {...register("to_100")} />
                    <FormErrorMessage>{errors.to_100?.message}</FormErrorMessage>
                </FormControl>
                <FormControl flex={'1'} isInvalid={errors.vmax}>
                    <FormLabel>V-Max</FormLabel>
                    <Input type="number" {...register("vmax")} />
                    <FormErrorMessage>{errors.vmax?.message}</FormErrorMessage>
                </FormControl>
            </Flex>
            <FormControl isInvalid={errors.description}>
                <FormLabel>Opis</FormLabel>
                <Textarea {...register('description')} bg={'#000'} color={'#fff'} borderColor={'rgb(163, 130, 58)'} />
                <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>
            <Button type='submit' my={4} bg={'rgb(163, 130, 58)'} color={'#fff'} _hover={{bg: 'rgb(163, 130, 58)'}}>Dalej</Button>
        </Flex>
    </form>
}

export default CarForm;