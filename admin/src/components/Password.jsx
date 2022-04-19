import React, { useState } from "react";
import { Action, ButtonFill } from '../styles/Buttons'
import { Card, Wrap } from '../styles/Card'
import { Input, LabelInput } from '../styles/Input'
import api from '../utils/api';
import { toast } from 'react-toastify';

const INIT_STATE = {
    password:'',
    newPassword: '',
    rePassword: ''
}

export default function Password(){
    const [formData, setFormData] = useState(INIT_STATE)

    const save = async () => {
        try {
            await api.patch('/users/setPassword', formData)   
            notify('hasło zmienione', false)
            setFormData(INIT_STATE)
        } catch (error) {
            notify(error.response.data.msg, true)
        }
    }

    const notify = (message, error) => {
        if(error){
            toast.error(message, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }else{
            toast.success(message, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        save();
    }
    return  <Card>
        <div className='header'>
            <div className="title">
                <h2 className='white'>Zmień Hasło</h2>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <Wrap style={{flexFlow: 'column'}}>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Aktualne Hasło</LabelInput>
                    <Input type='password' value={formData.password} onChange={e=>setFormData({...formData, ...{password: e.target.value}})} minLength={6} required />
                </div>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Nowe Hasło</LabelInput>
                    <Input type='password' value={formData.newPassword} onChange={e=>setFormData({...formData, ...{newPassword: e.target.value}})} minLength={6} required />
                </div>
                <div style={{padding: '1rem', display: 'flex', flexFlow: 'column'}}>
                    <LabelInput>Powtórz Hasło</LabelInput>
                    <Input type='password' value={formData.rePassword} onChange={e=>setFormData({...formData, ...{rePassword: e.target.value}})} minLength={6} required />
                </div>
                <Action>
                    <ButtonFill type="submit">Zapisz</ButtonFill>
                </Action>
            </Wrap>
        </form>
    </Card>
}