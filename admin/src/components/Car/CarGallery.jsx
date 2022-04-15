import React, {useState}  from 'react'
import styled from 'styled-components'
import {FaPlus} from 'react-icons/fa'
import {BsImageAlt} from 'react-icons/bs'
import * as color from '../../styles/Colors';
import { ButtonFill, ButtonOutline, Actions } from '../../styles/Buttons'

const ImageUpload = ({image, handleImg, index}) => {
    const { src } = image;
    return <Upload>
        <div className="js--image-preview" style={{  backgroundImage: "url(" + src + ")"}}>
            {src ? '' :  <BsImageAlt />}
        </div>
        <div className="upload-options">
            <label>
                <span><FaPlus /></span>
                <input data-index={index} type="file" className="image-upload" accept="image/*" onChange={handleImg} />
            </label>
        </div>
    </Upload>
}

export default function CarGallery ({stepActions}){
    const [images, setImages] = useState([])
    const addImage = () => {
        let arr = [...images];
        arr.push({alt:'', src:'', file:''})
        setImages(arr)
    }
    const handleImg = e => {
        const index = e.target.getAttribute('data-index');
        let arr = [...images]
        let img = {...arr[index]}
        if(e.target.files[0]) {
            img = {
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name,
                file: e.target.files[0]
            }
        }
        arr[index] = img;
        setImages(arr)
    }
    return <div>
        <Wrapper>
            {images.map((image,id) => <ImageUpload key={id} index={id} image={image} handleImg={handleImg} /> )}
            <AddImage onClick={addImage}>
                <FaPlus />
            </AddImage>
        </Wrapper>
        <Actions>
            <ButtonOutline type='button' onClick={()=>stepActions(false)}>Cofnij</ButtonOutline>
            <ButtonFill type='button' onClick={stepActions}>Dalej</ButtonFill>
        </Actions>
    </div>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 1rem;
`;

const AddImage = styled.div`
    min-width: 300px;
    height: 300px;
    margin: 10px;
    background: ${color.gold};
    color: ${color.white};
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    font-size: 3rem;
    cursor: pointer;
`;

const Upload = styled.div`
  display: block;
  min-width: 300px;
  height: 300px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  overflow: hidden;
  border: 1px solid ${color.gold};

    .upload-options {
        position: relative;
        height: 75px;
        background-color: ${color.gold};
        cursor: pointer;
        overflow: hidden;
        text-align: center;
        transition: background-color ease-in-out 150ms;
        &:hover {
            background-color: lighten($${color.gold}, 10%);
        }
        & input {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }
        & label {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
    }
    .js--image-preview {
        height: 225px;
        width: 100%;
        position: relative;
        overflow: hidden;
        background-image: url('');
        background-color: transparent;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        &.js--no-default::after {
            display: none;
        }
    }
`;