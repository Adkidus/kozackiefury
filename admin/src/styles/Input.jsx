import styled from "styled-components";
import * as color from '../styles/Colors';

export const LabelInput = styled.label`
    color: ${color.gold};
    letter-spacing: 0.1rem;
    padding: .5rem;
`;

export const Input = styled.input`
    background-color: #000;
    border-radius: 1rem;
    border: 1px solid ${color.gold};
    color: ${color.white};
    font-family: "Advent Pro", cursive;
    letter-spacing: 0.2rem;
    padding: 1rem;
    width: 100%;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${color.white};
        font-family: "Advent Pro", cursive;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
        background-color: #000;
        background: #000;
        border: 1px solid ${color.gold};
        color: ${color.white};
        -webkit-text-fill-color: ${color.white} !important;
        -webkit-box-shadow: 0 0 0 30px ${color.black} inset !important;
    }
`;

export const Select = styled.select`
    background-color: #000;
    border-radius: 1rem;
    border: 1px solid ${color.gold};
    color: ${color.white};
    font-family: "Advent Pro", cursive;
    letter-spacing: 0.2rem;
    padding: 1rem;
    width: 100%;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23a3823a' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 16px 12px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${color.white};
        font-family: "Advent Pro", cursive;
    }
`;

export const Error = styled.p`
    color: ${color.red};
    margin-left: 0.5rem;
    margin-top: 0.25rem;
`;

export const TextArea = styled.textarea`
    background-color: #000;
    border-radius: 1rem;
    border: 1px solid ${color.gold};
    color: ${color.white};
    font-family: "Advent Pro", cursive;
    letter-spacing: 0.2rem;
    padding: 1rem;
    width: 100%;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${color.white};
        font-family: "Advent Pro", cursive;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
        background-color: #000;
        background: #000;
        border: 1px solid ${color.gold};
        color: ${color.white};
        -webkit-text-fill-color: ${color.white} !important;
        -webkit-box-shadow: 0 0 0 30px ${color.black} inset !important;
    }
`;