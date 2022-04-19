import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import * as color from '../styles/Colors';
import Logo from '../assets/logo-bg-dark.png';
import { Input, LabelInput } from "../styles/Input";
import { ButtonFill } from "../styles/Buttons";

import { useDispatch, useSelector } from 'react-redux';
import { logInStart, authStart } from '../store/auth/actions';

export default function LoginPage(){
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        // if(localStorage.getItem('token') && !auth.currentUser)
        //     dispatch(authStart());
        // else 
        if(auth.currentUser)
            navigate('/')
    },[auth, navigate])
    const [form, setForm] = useState({email:'',password: ''})
    const submit = e => {
        e.preventDefault();
        dispatch(logInStart(form));
    }
    return <LoginContainer>
        <div className="login-side">
            <div className="header">
                <span>Login</span>
            </div>
            <form onSubmit={submit}>
                <div style={{display: 'flex', gap: '1rem', flexFlow: 'column'}}>
                    {auth.error ? <Error>Błąd! {auth.error}</Error>:''}
                    <div style={{display:'flex', flexFlow: 'column'}}>
                        <LabelInput>E-mail</LabelInput>
                        <Input type='email' value={form.email} onChange={e=>setForm({...form, ...{email: e.target.value}})} required />
                    </div>
                    <div style={{display:'flex', flexFlow: 'column'}}>
                        <LabelInput>Hasło</LabelInput>
                        <Input type='password' value={form.password} onChange={e=>setForm({...form, ...{password: e.target.value}})} required />
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <ButtonFill type="submit">LOGIN</ButtonFill>
                    </div>
                </div>
            </form>
        </div>
        <div className="image"></div>
    </LoginContainer>
}

const Error = styled.div`
    color: ${color.red};
`

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