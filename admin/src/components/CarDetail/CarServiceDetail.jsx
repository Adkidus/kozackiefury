
import { ButtonFill, ButtonOutline } from '../../styles/Buttons'
import { CardItem, Wrap } from '../../styles/Card'
import { Input, LabelInput, TextArea, Error } from '../../styles/Input';
import React, {useState, useEffect, useContext} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { selectCar } from '../../store/cars/actions';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { ModalContext } from "../../Providers/ModalContext";

const schema = yup.object({
    title: yup.string().required('Pole nie moe być puste!'),
}).required();

export default function CarServiceDetail({service}){
    const {setModalDetail} = useContext(ModalContext);
    const [serviceItem, setServiceItem] = useState(service)
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    const [editMode, setEditMode] = useState(false)
    const {handleSubmit, register, reset, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(()=>{
        reset(service)
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const hideModal = () => {
        setModalDetail({
           display: false, 
           content: null})
    }

    const submitForm = async(data) => {
        let car = {...cars.selectedCar}
        const servicesList = [...car.services]
        if(data._id !== null){
            let index = servicesList.findIndex(el => el._id === data._id)
            servicesList[index] = data;
            car.services = [...servicesList]
        }else{
            let newService = {...data}
            delete newService['_id']
            car.services.push(newService)
        }
        try {
            let res = await api.post('/cars/update', car);
            dispatch(selectCar(res.data))
            setServiceItem(data)
            setEditMode(false)
            toast.success(`Zapisano!`, {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            toast.error('Nie udało się zapisać!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return <form onSubmit={handleSubmit(submitForm)}>
        <Wrap>
            <CardItem>
                <LabelInput>Tytuł</LabelInput>
                {
                    !editMode ? 
                    <div style={{padding: '1rem'}}>{serviceItem.title}</div>:
                    <React.Fragment>
                        <Input type='text' {...register("title")} />
                        <Error>{errors.title?.message}</Error>   
                    </React.Fragment>
                }
            </CardItem>
            <CardItem></CardItem>
            <CardItem>
                <LabelInput>Czas</LabelInput>
                {
                    !editMode ? 
                    <div style={{padding: '1rem'}}>{serviceItem.time}</div>:
                    <Input type='text' {...register("time")} />
                }
            </CardItem>
            <CardItem>
                <LabelInput>Cena</LabelInput>
                {
                    !editMode ? 
                    <div style={{padding: '1rem'}}>{serviceItem.price}</div>:
                    <Input type='text' {...register("price")} />
                }
            </CardItem>
            <div style={{display: 'flex', flexFlow: 'column', width: '100%', padding: '.5rem'}}>
                <LabelInput>Opis</LabelInput>
                {
                    !editMode ? 
                    <div style={{padding: '1rem', whiteSpace: 'pre-line'}}>{serviceItem.description}</div>:
                    <TextArea rows="10" {...register("description")} />
                }
            </div>
        </Wrap>
        <div style={{display:'flex', justifyContent: 'space-between', marginTop: '1.5rem', width: '100%'}}>
            <ButtonOutline type='button' onClick={hideModal}>Zamknij</ButtonOutline>
            {
                !editMode?
                <ButtonFill type='button' onClick={()=>setEditMode(true)}>Edytuj</ButtonFill>:
                <div style={{display: 'flex', flexFlow: 'row', gap: '1rem'}}>
                    <ButtonOutline type='button' onClick={()=>{setEditMode(false);reset(service);}}>Anuluj</ButtonOutline>
                    <ButtonFill type='submit' onClick={()=>setEditMode(true)}>Zapisz</ButtonFill>
                </div>
            }
        </div>
    </form>
}