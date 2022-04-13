import React, {useState}  from 'react'
import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { ButtonFill, ButtonOutline, Actions } from '../../styles/Buttons'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

const ItemHeader = ({step, toggle}) => {   
    let {title, index, display} = step;
    return <StepHeader>
        <div className='title'>
            {title}
        </div>
        <div className='icon' onClick={()=>toggle(index)}>
            {display ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
    </StepHeader>
}

const _steps = [{index: 0, title: 'Dane samochodu', display: false}]

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
                    <div className='grid'>
                        <div className='item'>
                            <label>Marka</label>
                            <div className='val'>maserati</div>
                        </div>
                        <div className='item'>
                            <label>Model</label>
                            <div className='val'>gran turismo</div>
                        </div>
                        <div className='item'>
                            <label>Moc (KM)</label>
                            <div className='val'>450</div>
                        </div>
                        <div className='item'>
                            <label>Silnik</label>
                            <div className='val'>v8</div>
                        </div>
                        <div className='item'>
                            <label>0-100km/h</label>
                            <div className='val'>3.5s</div>
                        </div>
                        <div className='item'>
                            <label>Kategoria</label>
                            <div className='val'>Fast&Furious</div>
                        </div>
                    </div>
                    <div className='item'>
                        <label>Opis</label>
                        <div className='val'>
                            Poszukujesz opcji wyróżnienia się z tłumu? Chcesz przyciągnąć spojrzenia do swojego produktu?Zapraszamy do skorzystania z wynajmu Maserati GTs jako produktu reklamowego. Gwarantujemy że dodatek w postaci złotego auta zapewni dodatkowe zainteresowanie potencjalnych klientów. Obok samochodu nie da się przejść obojętnie dzięki czemu jest wynajem takiego pojazdu jest świetnym magnesem przyciągającym tłumy.lask złotego samochodu, ponad 470KM mocy płynącej z jednostki silnikowej która montowana jest w marce Ferrari.Czy można wyobrazić sobie lepszy prezent jak możliwość poprowadzenia złotego maserati?
                        </div>
                    </div>
                </StepBody>
            </div>)}
        </Div>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='button'>Zapisz</ButtonFill>
        </Actions>
    </div>
}

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