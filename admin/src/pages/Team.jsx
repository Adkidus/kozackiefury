import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from '../styles/Card'
import { Section } from '../styles/Section'
import * as color from '../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/team/actions';
import Person from '../components/Person';

export default function Team() {
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team);
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Team</h2>
                </div>
            </div>
        </Card>
        <TeamList>
            {
                team.loading? 'LOADING' :
                team.error? 'Error' : 
                team.usersList.map(item => <Person key={item._id} item={item} />)
            }
        </TeamList>
    </Section>
};

const TeamList = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
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
    @media screen and (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;