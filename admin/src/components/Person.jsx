import React, {useEffect} from 'react'
import scrollreveal from "scrollreveal";
import { Card } from '../styles/Card'
import {BiUserCircle} from 'react-icons/bi'
import { LabelInput } from '../styles/Input'

export default function Person({item}){
    const {first_name, last_name, email, phone} = item;
    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
            .item
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
    }, []);
    return <Card hover className='item'>
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