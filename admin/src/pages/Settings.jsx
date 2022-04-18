import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components'
import { Action, Actions, ButtonFill, ButtonOutline } from '../styles/Buttons'
import { Card, CardItem, Wrap } from '../styles/Card'
import { Input, LabelInput } from '../styles/Input'
import { Section } from '../styles/Section'

import {PersonModel} from '../Models/Person';

const Profile = () => {
    const auth = useSelector((state) => state.auth);
    const [userData, setUserData] = useState(PersonModel);
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        let user = {...auth.currentUser}
        setUserData({...PersonModel, ...user})
    },[auth])

    const toggleEditMode = () => {
        let user = {...auth.currentUser}
        if(editMode)
            setUserData({...PersonModel, ...user})
        setEditMode(!editMode)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setEditMode(!editMode)
    }

    return  <Card>
        <div className='header'>
            <div className="title">
                <h2 className='white'>Profil</h2>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <Wrap>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Imię</LabelInput>
                        {
                            editMode ?   
                            <Input type='text' value={userData.first_name} onChange={e=>setUserData({...userData, ...{first_name: e.target.value}})} /> :
                            <div style={{padding: '1rem'}}>{userData.first_name}</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Nazwisko</LabelInput>
                        {
                            editMode ?   
                            <Input value={userData.last_name} onChange={e=>setUserData({...userData, ...{last_name: e.target.value}})} /> :
                            <div style={{padding: '1rem'}}>{userData.last_name}</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Email</LabelInput>
                        {
                            editMode ?   
                            <Input type='email' value={userData.email} onChange={e=>setUserData({...userData, ...{email: e.target.value}})} /> :
                            <div style={{padding: '1rem'}}>{userData.email}</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Telefon</LabelInput>
                        {
                            editMode ?   
                            <Input type='tel' value={userData.phone} onChange={e=>setUserData({...userData, ...{phone: e.target.value}})} /> :
                            <div style={{padding: '1rem'}}>{userData.phone}</div>
                        } 
                    </CardItem>
                </Wrap>
            </div>
            {editMode ? 
            <Actions>
                <ButtonOutline type='button' onClick={toggleEditMode}>Anuluj</ButtonOutline>
                <ButtonFill type='submit'>Zapisz</ButtonFill>
            </Actions> :
            <Action>
                <ButtonFill type='button' onClick={toggleEditMode}>Edytuj</ButtonFill>
            </Action>}
        </form>
    </Card>
}

const Password = () => {
    return  <Card>
        <div className='header'>
            <div className="title">
                <h2 className='white'>Zmień Hasło</h2>
            </div>
        </div>
        <form>
            <Wrap style={{flexFlow: 'column'}}>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Aktualne Hasło</LabelInput>
                    <Input type='password' />
                </div>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Nowe Hasło</LabelInput>
                    <Input type='password' />
                </div>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Powtórz Hasło</LabelInput>
                    <Input type='password' />
                </div>
                <Action>
                    <ButtonFill>Zapisz</ButtonFill>
                </Action>
            </Wrap>
        </form>
    </Card>
}

export default function Settings() {
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Ustawienia</h2>
                </div>
            </div>
        </Card>
        <div className="grid">
            <Row>
                <Col>
                    <Profile />
                </Col>
                <Col>
                    <Password />
                </Col>
            </Row>
        </div>

    </Section>
};

const Row = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    @media only screen and (max-width: 768px) {
        flex-flow: column;
    }
`;

const Col = styled.div`
    flex: 1;
    height: 100%;
`;