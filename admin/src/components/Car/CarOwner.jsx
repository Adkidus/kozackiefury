import React, {useContext, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/team/actions';
import { CarContext } from '../../Providers/CarContext';
import { CardItem } from '../../styles/Card';
import { Error, Input, LabelInput } from '../../styles/Input';
import { Actions, ButtonFill, ButtonOutline } from '../../styles/Buttons';
import styled from "styled-components";
import * as color from '../../styles/Colors';
import { toast } from 'react-toastify';
import {BiRefresh} from 'react-icons/bi'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    first_name: yup.string().required('Pole nie moe być puste!'),
    email:  yup.string().email('Pole musi zawierać @ w adresie email!').required('Pole nie moe być puste!'),
}).required();

const PersonModel = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
}

function generatePassword() {
    var buf = new Uint8Array(6);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}

const CarOwner = ({stepActions}) => {
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team);
    const {carData, setCarData} = useContext(CarContext);
    const {handleSubmit, register, reset, getValues, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    useEffect(()=>{
        if(team.usersList.length === 0)
            dispatch(getUsers())
    },[dispatch]) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(()=>{
        if(carData?.owner){
            reset(carData.owner)
        }else{
            setCarData({
                ...carData,
                ...{owner: PersonModel}
            })
        }
    },[carData, setCarData]) // eslint-disable-line react-hooks/exhaustive-deps
    const selectPerson = user => {
        let n = {...PersonModel, ...user}
        reset(n)
    }
    const newPerson = () => {
        reset(PersonModel)
    }
    const randomPassword = () => {
        let _pass = generatePassword();
        let values = getValues();
        let o = {...values, ...{password: _pass}}
        reset(o)
    }
    const submitForm = data => {
        if(data._id === ''){
            let inValidPerson = team.usersList.find(e=> e.email.toLowerCase() === data.email.toLowerCase())
            if(inValidPerson){
                toast.error('Adres e-mail jest zajęty!', {
                    position: toast.POSITION.BOTTOM_TOP
                });
                return;
            }
            if(data.password === '' && data.password.length < 6){
                toast.error('Wprowadź hasło!', {
                    position: toast.POSITION.BOTTOM_TOP
                });
                return;
            }
        }
        setCarData({
            ...carData,
            ...{owner: data}
        })
        stepActions()
    }
    return <form onSubmit={handleSubmit(submitForm)}>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <div>
                    <ButtonOutline type="button" style={{margin: '.5rem', marginBottom: '1.25rem'}} onClick={newPerson}>Nowa osoba</ButtonOutline>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <CardItem>       
                        <LabelInput>Imię</LabelInput>
                        <Input type='text' {...register("first_name")} disabled={getValues('_id')!==''} />
                        <Error>{errors.first_name?.message}</Error>
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Nazwisko</LabelInput>
                        <Input type='text' {...register("last_name")} disabled={getValues('_id')!==''} />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>E-mail</LabelInput>
                        <Input type='email' {...register("email")} disabled={getValues('_id')!==''} />
                        <Error>{errors.email?.message}</Error>
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Telefon</LabelInput>
                        <Input type='tel' {...register("phone")} disabled={getValues('_id')!==''} />
                    </CardItem>
                    {
                        getValues('_id') === '' ? 
                        <React.Fragment>
                            <CardItem>       
                                <LabelInput>Hasło</LabelInput>
                                <Input type='text' {...register("password")} disabled={getValues('_id')!==''} minLength={6} />
                            </CardItem>
                            <CardItem>
                                <LabelInput>&nbsp;</LabelInput>
                                <ButtonOutline type="button" onClick={randomPassword}>
                                    Generuj Hasło
                                </ButtonOutline>
                            </CardItem>
                            <CardItem>
                                <LabelInput>Wygenerowane Hasło</LabelInput>
                                <div style={{marginLeft: '.7rem', fontWeight: '700'}}>{getValues('password')}</div>
                            </CardItem>
                        </React.Fragment>:''
                    }
                </div>
            </CardItem>
            <CardItem style={{marginTop: '1.25rem'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                    <UnderLine>Team</UnderLine>
                    <span style={{cursor: 'pointer', marginLeft: '.5rem'}} onClick={()=>dispatch(getUsers())}><BiRefresh /></span>
                </div>
                <List>
                    {team.usersList.map(user => <div key={user._id} className={`listEl ${getValues('_id') === user._id? 'active':''}`} onClick={()=>selectPerson(user)}>{user.first_name} {user.last_name} ({user.email})</div>)}
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