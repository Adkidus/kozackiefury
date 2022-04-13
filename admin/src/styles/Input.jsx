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
`;