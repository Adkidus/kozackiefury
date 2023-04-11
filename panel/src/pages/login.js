import {Button, Container, Flex, FormControl, FormLabel, Input, Image} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { logInStart } from '../store/auth/actions';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import mainLogo from'../assets/logo.png';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(()=>{
        if(auth.currentUser)
            navigate('/')
    },[auth, navigate])
    const submit = data => {
        dispatch(logInStart(data));
    }
    return <Container minHeight={'80vh'}>
        <Flex flexFlow={'column'} justifyContent={'center'} alignItems={'center'} minH={'80vh'} gap={"2rem"}> 
            <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
                <Image flex={1} src={mainLogo} alt={'logo'} />
            </Flex>
            <Flex flexFlow={'column'} w={'full'}>
                <form onSubmit={handleSubmit(submit)}>
                    <Flex flexFlow={'column'} gap={'1.5rem'}>
                        <FormControl>
                            <FormLabel textColor={'rgb(163, 130, 58)'}>E-mail</FormLabel>
                            <Input type={'email'} {...register('email')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel color={'rgb(163, 130, 58)'}>Hasło</FormLabel>
                            <Input type={'password'} {...register('password')} />
                        </FormControl>
                        <Button type='submit' mt={8} bg={'rgb(163, 130, 58)'} _hover={{bg: 'rgb(163, 130, 58)'}}>LOGIN</Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    </Container>
}

export default Login;