import React, {useState} from 'react'
import { ButtonFill } from '../../styles/Buttons'
import { Card, CardItem, Wrap } from '../../styles/Card'
import {LabelInput} from '../../styles/Input'
import CarEditForm from './CarEditForm'
import { useSelector } from 'react-redux';

const CarInfo = ({car, isAdmin, setEditMode}) => {
    return <div>
        <Wrap>
            <CardItem>
                <LabelInput>ID</LabelInput>
                <div style={{padding: '1rem'}}>{car._id}</div>
            </CardItem>
            <CardItem>
                <LabelInput>Kateogria</LabelInput>
                <div style={{padding: '1rem'}}>{car.category}</div>
            </CardItem>
            <CardItem>
                <LabelInput>Marka</LabelInput>
                <div style={{padding: '1rem'}}>{car.brand}</div>
            </CardItem>
            <CardItem>
                <LabelInput>Model</LabelInput>
                <div style={{padding: '1rem'}}>{car.mdoel}</div>
            </CardItem>
            <CardItem>
                <LabelInput>Moc (KM)</LabelInput>
                <div style={{padding: '1rem'}}>{car.horse_power}</div>
            </CardItem>
            <CardItem>
                <LabelInput>Silnik</LabelInput>
                <div style={{padding: '1rem'}}>{car.engine}</div>
            </CardItem>
            <CardItem>
                <LabelInput>0-100km/h</LabelInput>
                <div style={{padding: '1rem'}}>{car.to_100}</div>
            </CardItem>
        </Wrap>
        <div style={{display: 'flex', flexFlow: 'column', width: '100%'}}>
            <LabelInput>Opis</LabelInput>
            <div style={{padding: '1rem'}}>{car.description}</div>
        </div>
        {
            isAdmin? 
            <div style={{display:'flex', justifyContent: 'right'}}>
                <ButtonFill onClick={()=>setEditMode(true)}>Edytuj</ButtonFill>
            </div>:''
        }
    </div>
}

export default function CarDetails({car}){
    const [editMode, setEditMode] = useState(false);
    const auth = useSelector((state) => state.auth);
    const isAdmin = auth.currentUser.role === 'admin';
    return <Card>
        <div className="title">
            <h2>Informacje</h2>
        </div>
        {!editMode ?  <CarInfo car={car} isAdmin={isAdmin} setEditMode={setEditMode} /> : <CarEditForm car={car} setEditMode={setEditMode} />  }
    </Card>
}