import React, { useState } from 'react'
import { Section } from '../styles/Section'
import { Card, CardItem } from '../styles/Card'
import { Action, ButtonFill, ButtonOutline } from '../styles/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { PersonModel } from '../Models/Person'
import { Input, LabelInput, Select } from '../styles/Input'
import api from '../utils/api'
import { toast } from 'react-toastify';

function generatePassword() {
    var buf = new Uint8Array(6);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf));
}

const Model = {
    ...PersonModel,
    ...{password: '', role: 'user'}
}

export default function TeamNew(){
    const navigate = useNavigate();
    const [randomPassword, setRandomPassowrd] = useState()
    const [formData, setFormData] = useState(Model)
    const change = e => {
        const {name, value} = e.target;
        let _formData = {...formData}
        _formData[name] = value;
        setFormData(_formData)
        if(name === 'password')
            setRandomPassowrd(null)
    }
    const randomPassowrd = () => {
        let pass = generatePassword();
        let _formData = {...formData}
        _formData['password'] = pass;
        setRandomPassowrd(pass)
        setFormData(_formData)
    }
    const submit = e => {
        e.preventDefault()
        addPerson()
    }
    const addPerson = async() => {
        try {
            let res = await api.post('/users/register', formData)
            toast.success(res.data.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            navigate('/team')
        } catch (error) {
            toast.error(error.response.data.msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }
    return <Section>
    <Card>
        <div className='header'>
            <div className="title">
                <h2>Dodaj Uzytkownika</h2>
            </div>
            <Link to='/team'>
                <ButtonOutline>
                    Wyjdź
                </ButtonOutline>
            </Link>
        </div>
    </Card>
    <div className="grid">
        <Card>
        <form onSubmit={submit}>
            <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
                <CardItem>
                    <LabelInput>Imię</LabelInput>
                    <Input type='text' value={formData.first_name} name='first_name' onChange={change} required />
                </CardItem>
                <CardItem>
                    <LabelInput>Nazwisko</LabelInput>
                    <Input type='text' value={formData.last_name} name='last_name' onChange={change} />
                </CardItem>
                <CardItem>
                    <LabelInput>Email</LabelInput>
                    <Input type='email' value={formData.email} name='email' onChange={change} required />
                </CardItem>
                <CardItem>
                    <LabelInput>Phone</LabelInput>
                    <Input type='tel' value={formData.phone} name='phone' onChange={change} />
                </CardItem>
                <CardItem>
                    <LabelInput>Rola</LabelInput>
                    <Select value={formData.role} name='role' onChange={change}>
                        <option value='user'>User</option>
                        <option value='admin'>Admin</option>
                    </Select>
                </CardItem>
            </div>
            <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
                <CardItem>
                    <LabelInput>Hasło</LabelInput>
                    <Input type='password' value={formData.password} name='password' onChange={change} required />
                </CardItem>
                <CardItem>
                    <LabelInput>&nbsp;</LabelInput>
                    <ButtonOutline type='button' onClick={randomPassowrd}>Losowe hasło</ButtonOutline>
                </CardItem>
                {
                    randomPassword?
                    <CardItem>
                        <LabelInput>Wygenerowane hasło:</LabelInput>
                        <div style={{marginLeft: '.7rem', fontWeight: '700'}}>{randomPassword}</div>
                    </CardItem> : ''
                }
            </div>
            <div style={{margin: '1rem', marginTop: '1.5rem'}}>
                <Action>
                    <ButtonFill type='submit'>Zapisz</ButtonFill>
                </Action>
            </div>
        </form>
        </Card>
    </div>
</Section>
} 