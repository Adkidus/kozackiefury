import React from "react";
import styled from 'styled-components'
import * as color from '../styles/Colors';
import Logo from '../assets/logo-bg-dark.png';
import { Input, LabelInput } from "../styles/Input";
import { ButtonFill } from "../styles/Buttons";

export default function LoginPage(){
    return <LoginContainer>
        <div className="login-side">
            <div className="header">
                <span>Login</span>
            </div>
            <form>
                <div style={{display: 'flex', gap: '1rem', flexFlow: 'column'}}>
                    <div style={{display:'flex', flexFlow: 'column'}}>
                        <LabelInput>E-mail</LabelInput>
                        <Input type='email' />
                    </div>
                    <div style={{display:'flex', flexFlow: 'column'}}>
                        <LabelInput>Hasło</LabelInput>
                        <Input type='password' />
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <ButtonFill>LOGIN</ButtonFill>
                    </div>
                </div>
            </form>
        </div>
        <div className="image"></div>
    </LoginContainer>
}

const LoginContainer = styled.div`
    display: grid;
    grid-template-rows: minmax(min-content, 100vh);
    grid-template-columns: repeat(2, 50vw);
    .image{
        background-image: url(${Logo});
        background-color: transparent;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .login-side{
        color: ${color.white};
        display: flex;
        flex-flow: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 2rem;
        .header{
            font-size: 5rem;
            width: 40%;
            span{
                border-bottom: 1px solid ${color.gold};
            }
        }
        form{
            width: 40%;
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        background-color: #000;
        background: #000;
        border: 1px solid ${color.gold};
        color: ${color.white};
        -webkit-text-fill-color: ${color.white} !important;
        -webkit-box-shadow: 0 0 0 30px ${color.black} inset !important;
    }
    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(1,100vw);
        .image{
            display: none;
        }
        .login-side .header{
            width: 80%;
        }
        .login-side form{
            width: 80%;
        }
    }
`;