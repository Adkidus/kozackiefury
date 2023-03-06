import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../styles/Card'
import * as color from '../../styles/Colors';

export default function CarGallery({images}){
    const [selectedIndex, setSelectedIndex] = useState(0)
    return <Card>
        <div className="title">
            <h2>Galeria</h2>
        </div>
        <div>
            <div>
                <MainImage src={images[selectedIndex].location} alt={images[selectedIndex]._id}  />
            </div>
            <ImagesContainer>
                {images.map((img,index) => <img key={img._id} src={img.location} alt={img._id} onClick={()=>setSelectedIndex(index)} className={selectedIndex===index?'active':''} />)}
            </ImagesContainer>
        </div>
    </Card>
};

const MainImage = styled.img`
    width: 100%;
    max-width: 500px;
    border-radius: 1rem;
`

const ImagesContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
    img{
        width: 150px;
        border-radius: 1rem;
        cursor: pointer;
        &.active{
            border: 1px solid ${color.gold};
        }
    }
`;