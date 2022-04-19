import React from "react";
import { Action, ButtonFill } from '../styles/Buttons'
import { Card, Wrap } from '../styles/Card'
import { Input, LabelInput } from '../styles/Input'

export default function Password(){
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