import React, {useContext, useEffect, useState} from "react";
import { CarContext } from '../../Providers/CarContext';
import styled from "styled-components";
import * as color from '../../styles/Colors';
import { CardItem } from '../../styles/Card';
import { Input, LabelInput, TextArea } from '../../styles/Input';
import { Actions, ButtonFill, ButtonOutline } from '../../styles/Buttons';
import {FaTrash} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'

const ServiceModel = {
    time: '',
    price: '',
    title: '',
    description: ''
}

const CarServices = ({stepActions}) => {
    const { carData, setCarData } = useContext(CarContext);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        if(carData?.services)
            setServices(carData.services)
        else{
            setCarData({
                ...carData,
                ...{services: []}
            })
        }
    },[carData, setCarData])
    const change = (e,i) => {
        let arr = [...services]
        let service = {...arr[i]}
        service[e.target.name] = e.target.value;
        arr[i] = service;
        setServices(arr)
    }
    const addService = () => {
        let arr = [...services]
        arr.push(ServiceModel)
        setServices(arr)
    }
    const deleteService = i => {
        let arr = [...services]
        arr.splice(i, 1);
        setServices(arr)
    }
    const save = () => {
        setCarData({
            ...carData,
            ...{services: services}
        })
        stepActions()
    }
    return <div>
    <div style={{display: 'flex',flexDirection: 'column', flexWrap: 'wrap', gap: 0}}>
        {services.map((service,index) => <CardItem key={index}>
            <ServiceItem>
                <div className='trash' onClick={()=>deleteService(index)}>
                    <FaTrash />
                </div>
                <div className='serviceForm'>
                    <LabelInput>Nazwa</LabelInput>
                    <Input type='text' value={service.title} name='title' onChange={e=>change(e, index)} />
                    <div style={{display: 'flex', flexFlow: 'row'}}>
                        <CardItem>
                            <LabelInput>Czas</LabelInput>
                            <Input type='text' value={service.time} name='time' onChange={e=>change(e, index)} />
                        </CardItem>
                        <CardItem>
                            <LabelInput>Cena</LabelInput>
                            <Input type='text' value={service.price} name='price' onChange={e=>change(e, index)} />
                        </CardItem>
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column', width: '100%'}}>
                        <LabelInput>Opis</LabelInput>
                        <TextArea rows="5" value={service.description} name='description' onChange={e=>change(e, index)} />
                    </div>
                </div>
            </ServiceItem>
        </CardItem>)}
        <CardItem>
            <AddService onClick={addService}>
                <FaPlus />
            </AddService>
        </CardItem>
    </div>
    <Actions>
        <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
        <ButtonFill type='button' onClick={save}>Dalej</ButtonFill>
    </Actions>
</div>
}

export default CarServices;

const ServiceItem = styled.div`
    border: 1px solid ${color.gold};
    border-radius: 10px;
    display: flex;
    flex-flow: row;
    .trash{
        cursor: pointer;
        background: ${color.gold};
        padding: 0.5rem;
        display: flex;
        align-items: center;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    .serviceForm{
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-flow: column;
    }
`;

const AddService = styled.div`
    background: transparent;
    border: 1px solid ${color.gold};
    height: 100%;
    width: 100%;
    color: ${color.gold};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 3rem;
    cursor: pointer;
    min-height: 220px;
    :hover{
        background: ${color.gold};
        color: ${color.white};
    }
`;