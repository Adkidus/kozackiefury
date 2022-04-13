import React  from 'react'
import styled from 'styled-components'
import {FaPlus} from 'react-icons/fa'
import {BsImageAlt} from 'react-icons/bs'
import * as color from '../../styles/Colors';
import { ButtonFill, ButtonOutline, Actions } from '../../styles/Buttons'

export default function CarGallery ({stepActions}){
    return <div>
        <Wrapper>
            <Upload>
                <div className="js--image-preview">
                    <BsImageAlt />
                </div>
                <div className="upload-options">
                    <label>
                        <span><FaPlus /></span>
                        <input type="file" className="image-upload" accept="image/*" />
                    </label>
                </div>
            </Upload>
            <AddImage>
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