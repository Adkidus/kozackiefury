import React from 'react'
import { Card } from '../styles/Card'
import {BiUserCircle} from 'react-icons/bi'
import { LabelInput } from '../styles/Input'

export default function Person({item}){
    const {first_name, last_name, email, phone} = item;
    return <Card hover>
        <div className='icon'>
            <BiUserCircle />
        </div>
        <div style={{display:'flex', gap: '1rem', flexFlow: 'column'}}>
            <div>
                <LabelInput style={{paddingLeft: 0}}>Imię i nazwisko</LabelInput>
                <div className="val">{first_name} {last_name}</div>
            </div>
            <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <div>
                    <LabelInput style={{paddingLeft: 0}}>Telefon</LabelInput>
                    <div className="val">{phone || 'brak'} </div>
                </div>
                <div>
                    <LabelInput style={{paddingLeft: 0}}>Email</LabelInput>
                    <div className="val">{email || 'brak'}</div>
                </div>
            </div>
        </div>
    </Card>
}