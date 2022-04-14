import React from 'react'
import styled from 'styled-components'
import { Card } from '../styles/Card'
import { Section } from '../styles/Section'
import {BiUserCircle} from 'react-icons/bi'
import * as color from '../styles/Colors';
import { LabelInput } from '../styles/Input'

const team = [{firstName: 'Lorem', lastName: 'Ipsum', email: 'lorem@ipsum.com', phone: '111111111'},{firstName: 'Lorem', lastName: 'Ipsum', email: 'lorem@ipsum.com', phone: '111111111'}]

const Person = ({item}) => {
    const {firstName, lastName, email, phone} = item;
    return <Card hover>
        <div className='icon'>
            <BiUserCircle />
        </div>
        <div style={{display:'flex', gap: '1rem', flexFlow: 'column'}}>
            <div>
                <LabelInput style={{paddingLeft: 0}}>Imię i nazwisko</LabelInput>
                <div className="val">{firstName} {lastName}</div>
            </div>
            <div>
                <LabelInput style={{paddingLeft: 0}}>Telefon</LabelInput>
                <div className="val">{phone}</div>
            </div>
            <div>
                <LabelInput style={{paddingLeft: 0}}>Email</LabelInput>
                <div className="val">{email}</div>
            </div>
        </div>
    </Card>
}

export default function Team() {
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Team</h2>
                </div>
            </div>
        </Card>
        <TeamList>
            {team.map(item => <Person item={item} />)}
        </TeamList>
    </Section>
};

const TeamList = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1.5rem;

    .icon{
        color: ${color.gold};
        font-size: 5rem;
        display: flex;
        justify-content: center;
    }
    .val{
        padding: .5rem;
        padding-left: 0;
        font-weight: 700;
        letter-spacing: .2rem;
    }
`;