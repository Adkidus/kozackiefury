import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Section } from '../../styles/Section'
import { Card } from '../../styles/Card'
import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { ButtonOutline } from '../../styles/Buttons'

import CarGallery from '../../components/Car/CarGallery'
import CarSummary from '../../components/Car/CarSummary'
import CarForm from '../../components/Car/CarForm';
import CarOwner from '../../components/Car/CarOwner';
import CarServices from '../../components/Car/CarServices';

import { CarContext } from '../../Providers/CarContext';

const renderSwitch = (step, stepActions) => {
    switch(step) {
        case 0:
            return <CarForm nextStep={stepActions} />;
        case 1: 
            return <CarOwner stepActions={stepActions} />;
        case 2: 
            return <CarGallery stepActions={stepActions} />
        case 3: 
            return <CarServices stepActions={stepActions} />
        case 4: 
            return <CarSummary stepActions={stepActions} />
        default:
            return <div>{step + 1}</div>;
    }
}

export default function CarNew() {
    const [carData, setCarData] = useState();
    const value = { carData, setCarData };
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
            <div className='header'>
                <div className="title">
                    <h2>Dodaj Samochód</h2>
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
                <CarContext.Provider value={value}>
                    {renderSwitch(step, stepActions)}
                </CarContext.Provider>
            </Card>
        </div>
    </Section>
}

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