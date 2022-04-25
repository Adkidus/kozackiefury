import React, {useEffect} from 'react'
import styled from 'styled-components'
import * as color from '../../styles/Colors';
import { Section } from '../../styles/Section'
import { Card } from '../../styles/Card'
import {ButtonOutline} from '../../styles/Buttons'
import {ImPower} from 'react-icons/im'
import {GiHorseHead} from 'react-icons/gi'
import {BsSpeedometer} from 'react-icons/bs'
import {FiArrowRight} from 'react-icons/fi'
import {GoPlus} from 'react-icons/go'
import scrollreveal from "scrollreveal";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, selectCar } from '../../store/cars/actions';

const CarSpecItem = ({title, value, icon}) => {
    return <div className='carSpecItem'>
        <div className='carSpecIcon'>
            {icon}
        </div>
        <div>
            <div className='carSpecTitle'>
                {title}
            </div>
            <div className='carSpecData'>
                {value}
            </div>
        </div>
    </div>
} 

const CarsListItem = ({car}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const open = () => {
        // console.log('open',car)
        dispatch(selectCar(car))
        navigate(`/car/${car._id}`)
    }
    return <CardListItem className='cardListItem'>
        <ListItem>
            <div className='left'>
                <div>
                    <img src={car.photos[0]?.location} alt={car.brand} />
                </div>
                <div className='detail'>
                    <div className='header'>
                        <h2>{car.brand}</h2>
                        <h1>{car.model}</h1>
                    </div>
                    <div className='carSpec'>
                        <CarSpecItem title='silnik' value={car.engine} icon={<ImPower />} />
                        <CarSpecItem title='moc' value={car.horse_power + 'KM'} icon={<GiHorseHead />} />
                        <CarSpecItem title='0-100 km/h' value= {car.to_100 + 's'} icon={<BsSpeedometer />} />
                    </div>
                </div>
            </div>
            <div className='arrow' onClick={open}>
                <FiArrowRight />
            </div>
        </ListItem>
    </CardListItem>
}

export default function CarsList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
            .cardListItem
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
    }, []);
    useEffect(()=>{
        dispatch(getCars())
    },[dispatch])
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Flota</h2>
                </div>
                <Link to='/cars/new'>
                    <ButtonOutline>
                        <GoPlus />
                        Dodaj
                    </ButtonOutline>
                </Link>
            </div>
        </Card>
        <Container>
            {
                cars.loading? 'LOADING' :
                cars.error? 'Error' : 
                cars.carsList.length < 1? <div style={{margin: '1rem', color: '#fff'}}>Brak danych</div>:
                cars.carsList.map(item => <CarsListItem key={item._id} car={item} />)
            }
        </Container>
    </Section>
};

const Container = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    @media screen and (max-width: 1440px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ListItem = styled.div`
    position: relative;
	box-shadow: 0 3px 15px rgba(#333, 0.2);
	overflow: hidden;
	transition: 0.2s ease;
    display: flex;
	flex-direction: row;
    border-radius: 1px;
    justify-content: space-between;
    width: 100%;
    .left{
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
    }
    .arrow{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        padding: 1rem;
        svg{
            cursor: pointer;
        }
        svg:hover{
            color: ${color.gold};
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 350px;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        max-height: 240px;
        @media screen and (max-width: 700px) {
            display: none;
        }
    }
    .detail{
        padding: 1.5rem 2rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .header{
            text-transform: uppercase;
            letter-spacing: 2px;
            h1{
                color: ${color.gold};
                font-size: 1.5rem;
                font-weight: bold;
            }
            h2{
                color: ${color.white};
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }
    .carSpec{
        display: flex;
        flex-direction: row;
        gap: 2.5rem;
        font-size: 1.25rem;
        border-top: 1px solid ${color.white};
        padding-top: .25rem;
    }

    .carSpecItem{
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1rem;
    }

    .carSpecTitle{
        font-size: 1rem;
        color: ${color.white};
    }

    .carSpecData{
        color: ${color.gold};
        font-weight: 700;
    }
    .actions{
        display: flex;
        padding: 2rem;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        cursor: pointer;

        :hover{
            color: ${color.gold};
        }
    }
`;

const CardListItem = styled.section`
    margin-top: 1rem;
    border-radius: 1rem;
    background-color: ${color.lightDark};
    color: ${color.white};
    display: flex;
    /* flex-direction: column; */
    gap: 1rem;
    animation: fade-in 2000ms;
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;