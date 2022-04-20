import React, {useContext, useEffect} from 'react'
import { CarContext } from '../../Providers/CarContext';
import { Actions, ButtonFill } from '../../styles/Buttons';
import { CardItem } from '../../styles/Card';
import { Input, LabelInput, Select, Error } from '../../styles/Input';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    brand: yup.string().required('Pole nie moe być puste!'),
    model: yup.string().required('Pole nie moe być puste!'),
    horse_power: yup.string().required('Pole nie moe być puste!'),
    engine: yup.string().required('Pole nie moe być puste!'),
    to_100: yup.string().required('Pole nie moe być puste!'),
    category: yup.string().required('Pole nie moe być puste!'),
}).required();

const carModel = {
    brand: '',
    model: '',
    horse_power: '',
    engine: '',
    to_100: '',
    category: ''
}

const CarForm = ({nextStep}) => {
    const {carData, setCarData} = useContext(CarContext);
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(()=>{
        if(carData?.details){
            resetData()
        }else{
            setCarData({
                ...carData,
                ...{details: carModel}
            })
        }
    },[carData, setCarData])// eslint-disable-line react-hooks/exhaustive-deps

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

    return <form onSubmit={handleSubmit(submitForm)}>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <LabelInput>Marka</LabelInput>
                <Input type='text' {...register("brand")} />
                <Error>{errors.brand?.message}</Error>
            </CardItem>
            <CardItem>
                <LabelInput>Model</LabelInput>
                <Input type='text' {...register("model")} />
                <Error>{errors.model?.message}</Error>
            </CardItem>
            <CardItem>
                <LabelInput>Moc (KM)</LabelInput>
                <Input type='text' {...register("horse_power")} />
                <Error>{errors.horse_power?.message}</Error>
            </CardItem>
            <CardItem>
                <LabelInput>Silnik</LabelInput>
                <Input type='text' {...register("engine")} />
                <Error>{errors.engine?.message}</Error>
            </CardItem>
            <CardItem>
                <LabelInput>0-100km/h</LabelInput>
                <Input type='text' {...register("to_100")} />
                <Error>{errors.to_100?.message}</Error>
            </CardItem>
            <CardItem>
                <LabelInput>Kategoria</LabelInput>
                <Select {...register("category")}>
                    <option value=''></option>
                    <option value='Fast&Furious'>Fast&Furious</option>
                    <option value='Luxury&Business'>Luxury&Business</option>
                    <option value='Retro&Soul'>Retro&Soul</option>
                </Select>
                <Error>{errors.category?.message}</Error>
            </CardItem>
        </div>
        <Actions>
            <ButtonFill type='submit'>Dalej</ButtonFill>
        </Actions>
    </form>
}

export default CarForm;