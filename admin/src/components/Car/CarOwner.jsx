import React, {useContext, useEffect, useState} from "react";
import { CarContext } from '../../Providers/CarContext';
import { CardItem } from '../../styles/Card';
import { Input, LabelInput } from '../../styles/Input';
import { Actions, ButtonFill, ButtonOutline } from '../../styles/Buttons';
import styled from "styled-components";
import * as color from '../../styles/Colors';

const PersonModel = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
}

const owners = [
    {_id: '1',first_name: 'Jan', last_name: 'Kowalski', email: 'kowal@kowalski.pl', phone: '111222333'},
    {_id: '2',first_name: 'Marian', last_name: 'Krzywy', email: 'maniek@marain.pl', phone: '111222333'},
    {_id: '3',first_name: 'Eustachy', last_name: 'Boliwoda', email: 'eustachy@eustachy.pl', phone: '111222333'}
]

const CarOwner = ({stepActions}) => {
    const { carData, setCarData } = useContext(CarContext);
    const [formData, setFormData] = useState(PersonModel)
    useEffect(()=>{
        if(carData?.owner){
            setFormData(carData.owner)
        }else{
            setCarData({
                ...carData,
                ...{owner: PersonModel}
            })
        }
    },[carData, setCarData])
    const change = e => {
        setFormData({
            ...formData, 
            ...{[e.target.name]: e.target.value}
        })
    }
    const newPerson = () => {
        setFormData(PersonModel)
    }
    const submit = e => {
        e.preventDefault();
        setCarData({
            ...carData,
            ...{owner: formData}
        })
        stepActions()
    }
    return <form onSubmit={submit}>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <div>
                    <ButtonOutline type="button" style={{margin: '.5rem', marginBottom: '1.25rem'}} onClick={newPerson}>Nowa osoba</ButtonOutline>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <CardItem>       
                        <LabelInput>Imię</LabelInput>
                        <Input type='text' name="first_name" value={formData.first_name} onChange={change} disabled={formData._id !== ''} />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Nazwisko</LabelInput>
                        <Input type='text' name="last_name" value={formData.last_name} onChange={change} disabled={formData._id !== ''} />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>E-mail</LabelInput>
                        <Input type='email' name="email" value={formData.email} onChange={change} disabled={formData._id !== ''} />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Telefon</LabelInput>
                        <Input type='tel' name="phone" value={formData.phone} onChange={change} disabled={formData._id !== ''} />
                    </CardItem>
                </div>
            </CardItem>
            <CardItem style={{marginTop: '1.25rem'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                    <UnderLine>Team</UnderLine>
                </div>
                <List>
                    {owners.map(owner => <div key={owner._id} className={`listEl ${formData._id === owner._id ? 'active' : ''}`} onClick={()=>setFormData(owner)}>{owner.first_name} {owner.last_name} ({owner.email})</div>)}
                </List>
            </CardItem>
        </div>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='submit'>Dalej</ButtonFill>
        </Actions>
    </form>
}

const UnderLine = styled.span`
    border-bottom: 1px solid ${color.gold};
`;

const List = styled.div`
    display: flex; 
    flex-flow: column; 
    max-height: 210px;
    overflow-y: auto;
    /* gap: .5rem; */

    .listEl{
        font-size: 1.25rem;
        padding: 1rem .5rem;
        cursor: default;
    }
    .listEl.active{
        background-color: ${color.gold};
    }
    .listEl:hover{
        background-color: rgba(163, 130, 58, 0.4);
    }
`;

export default CarOwner;