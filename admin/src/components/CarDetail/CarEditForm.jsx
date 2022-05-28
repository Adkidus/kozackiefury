import React, {useEffect} from 'react'
import { ButtonFill, ButtonOutline } from '../../styles/Buttons'
import { CardItem, Wrap } from '../../styles/Card'
import { Input, LabelInput, Select, Error, TextArea } from '../../styles/Input';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import api from '../../utils/api';

import { useDispatch } from 'react-redux';
import { selectCar } from '../../store/cars/actions';

const schema = yup.object({
    brand: yup.string().required('Pole nie moe być puste!'),
    model: yup.string().required('Pole nie moe być puste!'),
    horse_power: yup.string().required('Pole nie moe być puste!'),
    engine: yup.string().required('Pole nie moe być puste!'),
    to_100: yup.string().required('Pole nie moe być puste!'),
    category: yup.string().required('Pole nie moe być puste!'),
}).required();

export default function CarEditForm({car, setEditMode}){
    const dispatch = useDispatch();
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(()=>{
        reset(car)
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const submitForm = async (data) => {
        try {
            let res = await api.post('/cars/update', data);
            dispatch(selectCar(res.data))
            setEditMode(false)
        } catch (error) {
            toast.error('Nie udało się zapisać!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    return <form onSubmit={handleSubmit(submitForm)}>
        <Wrap>
            <CardItem>
                <LabelInput>ID</LabelInput>
                <div style={{padding: '1rem'}}>{car._id}</div>
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
        </Wrap>
        <div style={{display: 'flex', flexFlow: 'column', width: '100%'}}>
            <LabelInput>Opis</LabelInput>
            <TextArea {...register("description")} rows="10" />
        </div>
        <div style={{display:'flex', justifyContent: 'right', marginTop: '1.5rem'}}>
            <ButtonOutline onClick={()=>setEditMode(false)} style={{marginRight: '1rem'}}>Anuluj</ButtonOutline>
            <ButtonFill type='submit'>Zapisz</ButtonFill>
        </div>
    </form>
}