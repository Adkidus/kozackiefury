import React, {useState} from 'react'
import styled from 'styled-components'
import { Action, Actions, ButtonFill, ButtonOutline } from '../styles/Buttons'
import { Card, CardItem, Wrap } from '../styles/Card'
import { Input, LabelInput } from '../styles/Input'
import { Section } from '../styles/Section'

const Profile = () => {
    const [edtiMode, setEditMode] = useState(false)
    return  <Card>
        <div className='header'>
            <div className="title">
                <h2 className='white'>Profil</h2>
            </div>
        </div>
        <form>
            <div>
                <Wrap>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Imię</LabelInput>
                        {
                            edtiMode ?   
                            <Input /> :
                            <div style={{padding: '1rem'}}>Lorem Ipsum</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Nazwisko</LabelInput>
                        {
                            edtiMode ?   
                            <Input /> :
                            <div style={{padding: '1rem'}}>Lorem Ipsum</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Email</LabelInput>
                        {
                            edtiMode ?   
                            <Input /> :
                            <div style={{padding: '1rem'}}>Lorem Ipsum</div>
                        } 
                    </CardItem>
                    <CardItem sm style={{padding: '1rem'}}>
                        <LabelInput>Telefon</LabelInput>
                        {
                            edtiMode ?   
                            <Input /> :
                            <div style={{padding: '1rem'}}>Lorem Ipsum</div>
                        } 
                    </CardItem>
                </Wrap>
            </div>
            {edtiMode ? 
            <Actions>
                <ButtonOutline type='button' onClick={()=>setEditMode(false)}>Anuluj</ButtonOutline>
                <ButtonFill>Zapisz</ButtonFill>
            </Actions> :
            <Action>
                <ButtonFill type='button' onClick={()=>setEditMode(true)}>Edytuj</ButtonFill>
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