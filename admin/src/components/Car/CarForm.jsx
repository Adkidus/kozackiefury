import React, {useContext, useEffect, useState} from 'react'
import { CarContext } from '../../Providers/CarContext';
import { Actions, ButtonFill } from '../../styles/Buttons';
import { CardItem } from '../../styles/Card';
import { Input, LabelInput, Select } from '../../styles/Input';

const carModel = {
    brand: '',
    model: '',
    horse_power: '',
    engine: '',
    to_100: '',
    category: ''
}

const CarForm = ({nextStep}) => {
    const [carForm, setCarForm] = useState(carModel);
    const { carData, setCarData } = useContext(CarContext);

    useEffect(()=>{
        if(carData?.details){
            setCarForm(carData.details)
        }else{
            setCarData({
                ...carData,
                ...{details: carModel}
            })
        }
    },[carData, setCarData])

    const submitForm = e => {
        e.preventDefault();
        setCarData({
            ...carData,
            ...{details: carForm}
        })
        nextStep()
    }

    return <form onSubmit={submitForm}>
        <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', gap: 0}}>
            <CardItem>
                <LabelInput>Marka</LabelInput>
                <Input type='text' value={carForm.brand} onChange={e=>setCarForm({...carForm, ...{brand: e.target.value}})} />
            </CardItem>
            <CardItem>
                <LabelInput>Model</LabelInput>
                <Input type='text' value={carForm.model} onChange={e=>setCarForm({...carForm, ...{model: e.target.value}})} />
            </CardItem>
            <CardItem>
                <LabelInput>Moc (KM)</LabelInput>
                <Input type='text' value={carForm.horse_power} onChange={e=>setCarForm({...carForm, ...{horse_power: e.target.value}})} />
            </CardItem>
            <CardItem>
                <LabelInput>Silnik</LabelInput>
                <Input type='text' value={carForm.engine} onChange={e=>setCarForm({...carForm, ...{engine: e.target.value}})} />
            </CardItem>
            <CardItem>
                <LabelInput>0-100km/h</LabelInput>
                <Input type='text'  value={carForm.to_100} onChange={e=>setCarForm({...carForm, ...{to_100: e.target.value}})} />
            </CardItem>
            <CardItem>
                <LabelInput>Kategoria</LabelInput>
                <Select value={carForm.category} onChange={e=>setCarForm({...carForm, ...{category: e.target.value}})}>
                    <option value=''></option>
                    <option value='Fast&Furious'>Fast&Furious</option>
                    <option value='Luxury&Business'>Luxury&Business</option>
                    <option value='Retro&Soul'>Retro&Soul</option>
                </Select>
            </CardItem>
        </div>
        <Actions>
            <ButtonFill type='submit'>Dalej</ButtonFill>
        </Actions>
    </form>
}

export default CarForm;