import React, { useState} from 'react'
import { Section } from '../../styles/Section'
import { Input, LabelInput } from '../../styles/Input'
import { Card, CardItem } from '../../styles/Card'
import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { ButtonFill, ButtonOutline, Actions } from '../../styles/Buttons'
import CarGallery from '../../components/Car/CarGallery'
import {FaTrash} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import CarSummary from '../../components/Car/CarSummary'
import { Link } from 'react-router-dom'

const renderSwitch = (step, stepActions) => {
    switch(step) {
        case 0:
            return <CarDetail nextStep={stepActions} />;
        case 1: 
            return <CarOwner stepActions={stepActions} />;
        case 2: 
            return <CarGallery stepActions={stepActions} />
        case 3: 
            return <CarServices stepActions={stepActions} />
        case 4: 
            return <CarSummary stepActions={stepActions} />
        default:
            return <div>krok {step + 1}</div>;
    }
  }

export default function CarNew() {
    const stepTitles = ['Dane samochodu', 'Właściciel samochodu', 'Galeria', 'Oferta', 'Podsumowanie'];
    const [step, setStep] = useState(0);
    const stepActions = (next=true) => {
        if(next){
            if(step+1 < stepTitles.length)
                setStep(step+1)
        }
        else{
            if(step-1>=0)
                setStep(step-1)
        }
    }
    return <Section>
                <Card>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="title">
                    <h2>DODAJ SAMOCHÓD</h2>
                </div>
                <Link to='/cars'>
                    <ButtonOutline>
                        Wyjdź
                    </ButtonOutline>
                </Link>
            </div>
        </Card>
        <div className="grid">
            <Card>
                <Step>
                    <div className='number'>{step+1}</div> {stepTitles[step]}
                </Step>
                {renderSwitch(step, stepActions)}
            </Card>
        </div>
    </Section>
}

const CarDetail = ({nextStep}) => {
    return <form>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <LabelInput>Marka</LabelInput>
                <Input />
            </CardItem>
            <CardItem>
                <LabelInput>Model</LabelInput>
                <Input />
            </CardItem>
            <CardItem>
                <LabelInput>Moc (KM)</LabelInput>
                <Input />
            </CardItem>
            <CardItem>
                <LabelInput>Silnik</LabelInput>
                <Input />
            </CardItem>
            <CardItem>
                <LabelInput>0-100km/h</LabelInput>
                <Input />
            </CardItem>
        </div>
        <Actions>
            <ButtonFill type='button' onClick={nextStep}>Dalej</ButtonFill>
        </Actions>
    </form>
}

const owners = [
    {firstName: 'Jan', lastName: 'Kowalski', email: 'kowal@kowalski.pl'},
    {firstName: 'Marian', lastName: 'Krzywy', email: 'maniek@marain.pl'},
    {firstName: 'Eustachy', lastName: 'Boliwoda', email: 'eustachy@eustachy.pl'}
]

const CarOwner = ({stepActions}) => {
    const [ownerDb, setOwnerDb] = useState(null)
    return <form>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <CardItem>       
                        <LabelInput>Imię</LabelInput>
                        <Input />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Nazwisko</LabelInput>
                        <Input />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>E-mail</LabelInput>
                        <Input type='email' />
                    </CardItem>
                    <CardItem>       
                        <LabelInput>Telefon</LabelInput>
                        <Input />
                    </CardItem>
                </div>
            </CardItem>
            <CardItem>
                <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Zapisani w bazie</div>
                <List>
                    {owners.map((owner, i) =>  <div key={i} className={`listEl ${ownerDb === i ? 'active' : ''}`} onClick={()=>setOwnerDb(i)}>{owner.firstName} {owner.lastName}</div>)}
                </List>
            </CardItem>
        </div>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='button' onClick={stepActions}>Dalej</ButtonFill>
        </Actions>
    </form>
}

const CarServices = ({stepActions}) => {
    return <div>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <ServiceItem>
                    <div className='trash'>
                        <FaTrash />
                    </div>
                    <div className='serviceForm'>
                        <LabelInput>Nazwa</LabelInput>
                        <Input />
                        <div style={{display: 'flex', flexFlow: 'row'}}>
                            <CardItem>
                                <LabelInput>Czas</LabelInput>
                                <Input />
                            </CardItem>
                            <CardItem>
                                <LabelInput>Cena</LabelInput>
                                <Input />
                            </CardItem>
                        </div>
                    </div>
                </ServiceItem>
            </CardItem>
            <CardItem>
                <AddService>
                <FaPlus />
                </AddService>
            </CardItem>
        </div>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='button' onClick={stepActions}>Dalej</ButtonFill>
        </Actions>
    </div>
}

const List = styled.div`
    display: flex; 
    flex-flow: column; 
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

const Step = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    .number{
        font-size: 2rem;
        width: 70px;
        line-height: 70px;
        border-radius: 100px;
        border: 1px solid ${color.gold};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ServiceItem = styled.div`
    border: 1px solid ${color.gold};
    border-radius: 10px;
    display: flex;
    flex-flow: row;
    .trash{
        cursor: pointer;
        background: ${color.gold};
        padding: 0.5rem;
        display: flex;
        align-items: center;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
    .serviceForm{
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-flow: column;
    }
`;

const AddService = styled.div`
    background: transparent;
    border: 1px solid ${color.gold};
    height: 100%;
    width: 100%;
    color: ${color.gold};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 3rem;
    cursor: pointer;
    :hover{
        background: ${color.gold};
        color: ${color.white};
    }
`;