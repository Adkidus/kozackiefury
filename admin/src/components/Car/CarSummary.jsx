import React, {useState, useContext}  from 'react'
import { CarContext } from '../../Providers/CarContext';
import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { ButtonFill, ButtonOutline, Actions } from '../../styles/Buttons'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

const ItemHeader = ({step, toggle}) => {   
    let {title, index, display} = step;
    return <StepHeader onClick={()=>toggle(index)}>
        <div className='title'>
            {title}
        </div>
        <div className='icon'>
            {display ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
    </StepHeader>
}

const _steps = [
    {index: 0, title: 'Dane samochodu', display: false},
    {index: 1, title: 'Właściciel', display: false},
    {index: 2, title: 'Galeria', display: false},
    {index: 3, title: 'Oferta', display: false}
];

const _render = index => {
    switch (index) {
        case 0:
            return <CarDetal />;
        case 1:
            return <CarOwner />;
        case 3:
            return <CarServices />;
        default:
            return <div></div>;
    }
}

const CarDetal = () => {
    const { carData } = useContext(CarContext);
    const {brand, model, engine, horse_power, to_100, category} = carData.details;
    return <React.Fragment>
        <div className='grid'>
            <div className='item'>
                <label>Marka</label>
                <div className='val'>
                    {brand}
                </div>
            </div>
            <div className='item'>
                <label>Model</label>
                <div className='val'>
                    {model}
                </div>
            </div>
            <div className='item'>
                <label>Moc (KM)</label>
                <div className='val'>
                    {horse_power}
                </div>
            </div>
            <div className='item'>
                <label>Silnik</label>
                <div className='val'>
                    {engine}
                </div>
            </div>
            <div className='item'>
                <label>0-100km/h</label>
                <div className='val'>
                    {to_100}s
                </div>
            </div>
            <div className='item'>
                <label>Kategoria</label>
                <div className='val'>
                    {category}
                </div>
            </div>
        </div>
        <div className='item'>
            <label>Opis</label>
            <div className='val'>

            </div>
        </div>
    </React.Fragment>
}

const CarOwner = () => {
    const { carData } = useContext(CarContext);
    const {first_name, last_name, phone, email} = carData.owner;
    return <React.Fragment>
        <div className='grid'>
            <div className='item'>
                <label>Imię</label>
                <div className='val'>{first_name}</div>
            </div>
            <div className='item'>
                <label>Nazwisko</label>
                <div className='val'>{last_name}</div>
            </div>
            <div className='item m-none'></div>
            <div className='item'>
                <label>Telefon</label>
                <div className='val'>{phone}</div>
            </div>
            <div className='item'>
                <label>Email</label>
                <div className='val'>{email}</div>
            </div>
        </div>
    </React.Fragment>
}

const CarServices = () => {
    const { carData } = useContext(CarContext);
    return <React.Fragment>
        {carData.services.map((service, i) => <div key={i}>
            <div className='grid'>
                <div className='item'>
                    <label>Nazwa</label>
                    <div className='val'>{service.title}</div>
                </div>
                <div className='item'>
                    <label>Czas</label>
                    <div className='val'>{service.time}</div>
                </div>
                <div className='item'>
                    <label>Cena</label>
                    <div className='val'>{service.price}</div>
                </div>
            </div>
            <div className='item'>
                <label>Opis</label>
                <div className='val'>
                    
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'left'}}>
                <UnderLine />
            </div>
        </div>)}
    </React.Fragment>
}

export default function CarSummary({stepActions}){
    const [steps, setSteps] = useState(_steps);
    const toggle = index => {
        let _steps = [...steps]
        _steps[index].display = !steps[index].display
        setSteps(_steps)
    }
    return <div>
        <Div>
            {steps.map(step => <div key={step.index}>
                <ItemHeader step={step} toggle={toggle} />
                <StepBody style={{display: `${step.display ? 'block': 'none'}`}}>
                    {_render(step.index)}
                </StepBody>
            </div>)}
        </Div>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='button'>Zapisz</ButtonFill>
        </Actions>
    </div>
}

const UnderLine = styled.div`
    background: ${color.gold};
    width: 40%;
    height: 1px;
    margin: 1rem;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap; 
    gap: 1rem; 
    padding: 0 2rem;
    @media screen and (max-width: 1080px) {
        padding: 0;
    }
`;

const StepHeader = styled.div`
    padding: 1rem;
    border-bottom: 1px solid ${color.gold};
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    font-size: 1.5rem;
    cursor: pointer;
    .icon{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const StepBody = styled.div`
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        @media screen and (max-width: 1080px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 780px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .m-none{
        @media screen and (max-width: 780px) {
            display: none;
        }
    }
    .item{
        padding: 1rem;
        label{
            color: ${color.gold};
        }
        .val{
            font-size: 1.25rem;
        }
    }
`;