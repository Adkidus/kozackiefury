import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { Card } from '../../styles/Card'
import React, {useContext} from 'react'
import { ModalContext } from "../../Providers/ModalContext";
import CarServiceDetail from './CarServiceDetail';
import { ButtonOutline } from '../../styles/Buttons'
import { ServiceModel } from '../../Models/Service';

const Service = ({service}) => {
    const {setModalDetail} = useContext(ModalContext);
    const {title, time, price} = service;
    const displayModal = () => {
        setModalDetail({
           display: true, 
           content: <CarServiceDetail service={service} />})
    }
    return <div className='item' onClick={displayModal}>
        <div>
            Tytuł: <span>{title}</span>
        </div>
        <div>
            Czas: <span>{time}</span>
        </div>
        <div>
            Cena: <span>{price}</span>
        </div>
    </div>
}

export default function CarServices({services}){
    const {setModalDetail} = useContext(ModalContext);
    const service = ServiceModel;
    const displayModal = () => {
        setModalDetail({
           display: true, 
           content: <CarServiceDetail service={service} />})
    }
    return <Card>
        <div className="title">
            <div style={{display:'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <h2>Oferta</h2>
                <ButtonOutline onClick={displayModal}>+ Dodaj</ButtonOutline>
            </div>
        </div>
        <ServicesContainer>
            {services.length === 0? <div>Brak danych</div>:''}
            {services.map(service => <Service key={service._id} service={service} />)}
        </ServicesContainer>
    </Card>
}

const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: wrap;
    gap: 1rem;
    .item{
        border: 1px solid ${color.gold};
        display: flex;
        flex-flow: column;
        gap: .75rem;
        padding: 1rem;
        width: 400px;
        cursor: pointer;
        span{
            font-weight: 700;
            font-size: 1.25rem;
        }
        &:hover{
            box-shadow: 0px 3px 7px rgba(163, 130, 58, 0.4);
            transform: translateY(-1px);
        }
    }
`;